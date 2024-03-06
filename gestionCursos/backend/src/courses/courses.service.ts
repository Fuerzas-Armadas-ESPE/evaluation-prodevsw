import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './course.interface';
import { CreateCourseDto } from './create-course.dto';
import { UpdateCourseDto } from './update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().populate('topics').exec();
  }

  async findOne(id: string): Promise<Course> {
    const course = await this.courseModel
      .findById(id)
      .populate('topics')
      .exec();
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course;
  }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCourse = new this.courseModel(createCourseDto);
    return createdCourse.save();
  }

  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const existingCourse = await this.courseModel.findByIdAndUpdate(
      id,
      updateCourseDto,
      { new: true },
    );
    if (!existingCourse) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return existingCourse;
  }

  async remove(id: string): Promise<Course> {
    const deletedCourse = await this.courseModel.findByIdAndDelete(id);
    if (!deletedCourse) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return deletedCourse;
  }
}
