export class UpdateCourseDto {
  readonly name?: string;
  readonly description?: string;
  readonly topics?: string[]; // Array de IDs de temas relacionados
}
