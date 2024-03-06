export class CreateCourseDto {
  readonly name: string;
  readonly description: string;
  readonly topics: string[]; // Array de IDs de temas relacionados
}
