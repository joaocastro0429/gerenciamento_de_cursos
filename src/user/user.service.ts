import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDto } from "src/dto/user-dto";
import { FilterDto } from "src/dto/fiter-dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.course.findMany();
  }

  async createCourse(data: UserDto) {
    return this.prisma.course.create({
      data: {
        name: data.name,
        description: data.description,
        duration: data.duration,
        date_init: new Date(data.date_init),
      },
    });
  }

  async findById(id: string) {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  findFiltered(filters?:FilterDto){
    const where: any ={}
    if (filters?.data_init){
      where.date_init =  new Date (filters.data_init)
    }
    if (filters?.duration){
      where.duration = filters.duration
    }

    return this.prisma.course.findMany({
      where,
      orderBy: { date_init: 'asc' }
    })

  }

  async updateCourse(id: string, data: UserDto) {
    return this.prisma.course.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        duration: data.duration,
        date_init: new Date(data.date_init),
      },
    });
  }

  async deleteCourse(id: string) {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}