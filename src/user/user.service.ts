import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    return this.prisma.course.findMany();
  }

  async createCourse(
    data: {
      name: string
      description: string
      duration: number
      date_init: string
    }
  ) {
    return this.prisma.course.create({
      data: {
        name: data.name,
        description: data.description,
        duration: data.duration,
        date_init: new Date(data.date_init),
      },
    });
  }

  async findById(id:string){
    return this.prisma.course.findUnique({
      where:{id},
    })
  }

  async updateCourse(id: string, data: any) {
  return this.prisma.course.update({
    where: {
      id,
    },
    data: {
        name: data.name,
        description: data.description,
        duration: data.duration,
        date_init: new Date(data.date_init),
      },
  })
}

async deleteCourse(id: string) {
  return this.prisma.course.delete({
    where: {
      id,
    },
  });

}
}
