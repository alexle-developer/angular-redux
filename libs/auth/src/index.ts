
// In index.ts, we can export all folder specific components and modules.
// The

export * from './lib/auth.module';
export {AuthService} from './lib/services/auth/auth.service';

// auth.module has already exported a member named 'authRoutes'
// authRoutes is also exported from lib.routes.ts
// comment the line below to remove the ambiguity.
// we either export authRoutes from auth.module or from lib.routes.ts but not both
//export * from './lib/lib.routes';
