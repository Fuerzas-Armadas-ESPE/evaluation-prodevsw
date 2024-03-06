import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Topic } from './topic.interface';
import { CreateTopicDto } from './create-topic.dto';
import {  UpdateTopicDto } from './update-topic.dto';

@Injectable()
export class TopicsService {
  constructor(@InjectModel('Topic') private readonly topicModel: Model<Topic>) {}

  async findAll(): Promise<Topic[]> {
    return this.topicModel.find().exec();
  }

  async findOne(id: string): Promise<Topic> {
    return this.topicModel.findById(id).exec();
  }

  async create(createTopicDto: CreateTopicDto): Promise<Topic> {
    const createdTopic = new this.topicModel(createTopicDto);
    return createdTopic.save();
  }

  async update(id: string, updateTopicDto: UpdateTopicDto): Promise<Topic> {
    const existingTopic = await this.topicModel.findByIdAndUpdate(id, updateTopicDto, { new: true });
    if (!existingTopic) {
      throw new NotFoundException(`Topic with ID ${id} not found`);
    }
    return existingTopic;
  }

  async remove(id: string): Promise<Topic> {
    const deletedTopic = await this.topicModel.findByIdAndDelete(id);
    if (!deletedTopic) {
      throw new NotFoundException(`Topic with ID ${id} not found`);
    }
    return deletedTopic;
  }
  
}
