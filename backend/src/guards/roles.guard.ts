// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly allowedRoles: string[]) {}

  canActivate(context: ExecutionContext): boolean {
    const { user } = context.switchToHttp().getRequest();
    console.log('user', user);

    // Assuming the user object has a 'role' property
    // Check if the user's role is included in the allowed roles
    // return this.allowedRoles.includes(user.role);  TODO:// FIX IT
    return true;
  }
}
