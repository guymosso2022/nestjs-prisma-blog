import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

   
    constructor( 
        private userService: UsersService,
        private jwtService: JwtService
        ){}
    async validateUser(email: string, password: string){
        const result = await this.userService.findOneByEmail(email);
        if(!result || result.password !== password) return false;
        return result;
    }

    sign(user: User){
        const accessToken = this.jwtService.sign({sub: user.id, email: user.email})
        return {
            access_token: accessToken
        }
    }

    async registrer(createUserDto: CreateUserDto){
        const newUser =  this.userService.create(createUserDto);
        return this.sign(await newUser)
    }
}
