export * from './lib/+state/auth.models';
export * from './lib/+state/auth.selectors';
export * from './lib/+state/auth.reducer';
export * from './lib/+state/auth.actions';

// In index.ts, we can export all folder specific components and modules.
//
// "paths": {
//   "@angular-redux/auth": ["libs/auth/src/index.ts"],
//   "@angular-redux/data-models": ["libs/data-models/src/index.ts"],
//   "@angular-redux/layout": ["libs/layout/src/index.ts"],
//   "@angular-redux/material": ["libs/material/src/index.ts"];
// }
//
//path @angular-redux/auth for this index.ts

export * from './lib/auth.module';
export { AuthService } from './lib/services/auth/auth.service';
export { AuthGuard } from './lib/guards/auth/auth.guard';

// auth.module has already exported a member named 'authRoutes'
// authRoutes is also exported from lib.routes.ts
// comment the line below to remove the ambiguity.
// we either export authRoutes from auth.module or from lib.routes.ts but not both
//export * from './lib/lib.routes';
