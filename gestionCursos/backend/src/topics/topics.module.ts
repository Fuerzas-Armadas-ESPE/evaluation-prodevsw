// topics.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';
import { TopicSchema } from './topic.schema'; // Importa el esquema aquí

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Topic', schema: TopicSchema }]),
  ],
  controllers: [TopicsController],
  providers: [TopicsService],
})
export class TopicsModule {}
