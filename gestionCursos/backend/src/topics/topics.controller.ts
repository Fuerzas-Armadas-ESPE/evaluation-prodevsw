import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './create-topic.dto';
import {UpdateTopicDto } from './update-topic.dto';

import { Topic } from './topic.interface';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Get()
  async findAll(): Promise<Topic[]> {
    return this.topicsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Topic> {
    return this.topicsService.findOne(id);
  }

  @Post()
  async create(@Body() createTopicDto: CreateTopicDto): Promise<Topic> {
    return this.topicsService.create(createTopicDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTopicDto: UpdateTopicDto,
  ): Promise<Topic> {
    return this.topicsService.update(id, updateTopicDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Topic> {
    return this.topicsService.remove(id);
  }
}
