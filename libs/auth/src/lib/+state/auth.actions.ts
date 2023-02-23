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


// add login action creators
export enum AuthActionTypes {
  Login = '[Auth Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFail = '[Auth API] Login Fail'
}

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
