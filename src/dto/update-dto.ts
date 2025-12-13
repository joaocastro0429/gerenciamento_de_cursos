import { IsDate, IsNumber, IsString } from "class-validator";

export class UpdateDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  duration: number;

  @IsDate()
  date_init: Date;
}