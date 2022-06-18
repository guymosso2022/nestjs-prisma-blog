import { CanActivate, createParamDecorator, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

export const Me = createParamDecorator(async (data: any, context: ExecutionContext) =>{
  const request = context.switchToHttp().getRequest();
  return request.user;
})
