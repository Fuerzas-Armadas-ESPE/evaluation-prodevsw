// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module'; // Importa tus módulos aquí
import { TopicsModule } from './topics/topics.module'; // Importa tus módulos aquí

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/gestion'), // Cambia el nombre de la base de datos según tu configuración
    CoursesModule, // Agrega tus módulos aquí
    TopicsModule, // Agrega tus módulos aquí
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
