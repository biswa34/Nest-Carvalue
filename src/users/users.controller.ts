import { Body, Controller, Delete, Get, Param, Patch, Post, Query, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { get } from 'http';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('auth')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto){
        this.userService.create(body.email, body.password);
    }

    @Get('/:id')
    async findUser(@Param('id') id: string){
        const user = await this.userService.findOne(parseInt(id));

        if (!user) {
            throw new NotFoundException('User not found!');
        }
        
        return user;
    }

    @Get()
    findAllUser(@Query('email') email: string){
        return this.userService.find(email);
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
        return this.userService.update(parseInt(id), body);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string){
        return this.userService.remove(parseInt(id));
    }


}
