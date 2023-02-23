import {Authenticate, User} from '@angular-redux/data-models';
import {createAction, props} from '@ngrx/store';
import {AuthEntity} from './auth.models';


export const initAuth = createAction('[Auth Page] Init');

export const loadAuthSuccess = createAction(
  '[Auth/API] Load Auth Success',
  props<{auth: AuthEntity[];}>()
);

export const loadAuthFailure = createAction(
  '[Auth/API] Load Auth Failure',
  props<{error: any;}>()
);



/**
Action Hygiene

- Actions should capture unique events not commands
- Try not to reuse actions and make generic actions
- Suffix your Action types with their source so you know where they are dispatched from like Login = '[Login Page] Login'
- Let effects and reducers be the decision maker not the component and add multiple cases to a switch statement or effects.
- Avoid action sub typing by adding conditional information to a property of an action payload by making multiple actions for each case. This makes it easier to test and avoids complicated conditional logic in effects and reducers.
- Write actions first

 */


// Strong Typing the State and Actions
export enum AuthActionTypes {
  Login = '[Auth Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFail = '[Auth API] Login Fail'
}

// add login action creators
export const login = createAction(
  AuthActionTypes.Login,
  props<{payload: Authenticate;}>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{payload: User;}>()
);

export const loginFailure = createAction(
  AuthActionTypes.LoginFail,
  props<{payload: any;}>()
);
