import { IsDate, IsDateString, IsNumber, IsString, IsUUID } from "class-validator";

export class UpdateDto {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  duration: number;

  @IsDateString()
  date_init: Date;
}