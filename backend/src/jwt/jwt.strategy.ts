import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { AuthService } from '../auth/auth.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // private readonly authService: AuthService
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any) {
    // try {
    // console.log('decodedToken', payload);
    // Implement your token validation logic here
    // const decodedToken = jwt.verify(payload, process.env.SECRET_KEY);
    // For example, check if the user exists in the database
    // return await this.authService.validateUser(payload);
    console.log('JWT STRATEGY', payload);

    return payload;
    // } catch (error) {
    //   // throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    // }
  }
}
