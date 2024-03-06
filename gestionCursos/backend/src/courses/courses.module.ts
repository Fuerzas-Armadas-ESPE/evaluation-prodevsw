// courses.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { CourseSchema } from './course.schema'; // Importa el esquema aquí

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
