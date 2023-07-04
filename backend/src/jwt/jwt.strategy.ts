// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // private readonly authService: AuthService
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'YOUR_SECRET_KEY',
    });
  }

  async validate(payload: any) {
    // Implement your token validation logic here
    // For example, check if the user exists in the database
    // return await this.authService.validateUser(payload);
  }
}
