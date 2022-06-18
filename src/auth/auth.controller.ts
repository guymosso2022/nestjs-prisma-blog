import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Me } from './guards/me.guard';


@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
        private userService: UsersService,
        private jwtService: JwtService
        ){}

    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Request() req ){
        return this.authService.sign(req.user);
    }

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    profile(@Me() me){
        return me;
    }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto){
        return await this.authService.registrer(createUserDto);
    }
}
