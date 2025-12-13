import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateDto } from 'src/dto/update-dto';
import { UserDto } from 'src/dto/user-dto';

@Controller('/api')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get("/cursos")
    findAll() {
        return this.userService.findAll()
    }

    @Post("/cursos")
    create(@Body() data: UserDto) {
        return this.userService.createCourse(data)
    }

    @Get("/courses/:id")
    findOne(@Param('id') id: string) {
        return this.userService.findById(id)
    }

    

    @Put("/courses/:id")
    update(@Param('id') id: string, @Body() data: UpdateDto) {
        return this.userService.updateCourse(id, data)
    }

    @Delete("/courses/:id")
    delete(@Param('id') id: string) {
        return this.userService.deleteCourse(id)
    }
}
