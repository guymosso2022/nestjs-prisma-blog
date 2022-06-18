import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){
  // handleRequest(err, user, info, context, status) {
    // const request = context.switchToHttp().getRequest();
    // const { email, password } = request.body;
    // if (err || !user) {
    //   if (!email) {
    //     throw new HttpException({ message: `l'email ne peut pas etre vide` }, HttpStatus.OK);
    //   } else if (!password) {
    //     throw new HttpException({ message: `le mot de passe ne peut pas etre vide` }, HttpStatus.OK);
    //   } else {
    //     throw err || new UnauthorizedException();
    //   }
    // }
    // return user;
  // }
}
