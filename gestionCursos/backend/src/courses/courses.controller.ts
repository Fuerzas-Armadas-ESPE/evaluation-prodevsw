import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';
import {UpdateCourseDto } from './update-course.dto';

import { Course } from './course.interface';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Course> {
    return this.coursesService.findOne(id);
  }

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return this.coursesService.create(createCourseDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto): Promise<Course> {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Course> {
    return this.coursesService.remove(id);
  }
}
