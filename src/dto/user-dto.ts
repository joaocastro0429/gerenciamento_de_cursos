import { IsDate, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
import { Type } from 'class-transformer';

export class UserDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  duration: number;

  @IsDate()
  @Type(() => Date)
  date_init: Date;
}