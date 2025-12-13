import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get("/courses")
    findAll(){
return this.userService.findAll()    
}
    
    @Post("/courses")
    create(@Body() data:any){
        return this.userService.createCourse(data)
    }

    @Get("/courses/:id")
    findOne(@Param('id') id:string){
        return this.userService.findById(id)
    }

    @Put("/courses/:id")
    update(@Param('id') id:string, @Body() data:any){
        return this.userService.updateCourse(id, data)
    }

    @Delete("/courses/:id")
    delete(@Param('id') id:string){
        return this.userService.deleteCourse(id)
    }
}
