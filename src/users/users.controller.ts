import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    findAll() {
        return this.userService.findAll()
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id)
    }
    @Post()
    createOne(@Body() user: { id: number, name: string, age: number }) {
        return this.userService.createOne(user)
    }
    @Patch(":id")
    editOne(@Param("id") id: string, @Body() editedUser: { name?: string, age?: number }) {
        return this.userService.editOne(+id, editedUser)
    }
}
