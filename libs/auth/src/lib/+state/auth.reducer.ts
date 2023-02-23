import {User} from '@angular-redux/data-models';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {createReducer, on, Action} from '@ngrx/store';

import * as AuthActions from './auth.actions';
import {AuthEntity} from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

// Add default state and interface

/**
 * Interface for the 'Auth' data used in
 *  - AuthState, and
 *  - authReducer
 */
export interface AuthData {
  loading: boolean;
  user: User;
  error: Error;
}

/**
 * Interface to the part of the Store containing AuthState
 * and other information related to AuthData.
 */
export interface AuthState {
  readonly auth: AuthData;
}

// rename AuthState to State
export interface State extends EntityState<AuthEntity> {
  selectedId?: string | number; // which Auth record has been selected
  loaded: boolean; // has the Auth list been loaded
  error?: string | null; // last known error (if any)
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const authAdapter: EntityAdapter<AuthEntity> =
  createEntityAdapter<AuthEntity>();

// set initial required properties
export const initialAuthState: State = authAdapter.getInitialState({
  action: AuthActions, // from auth.actions.ts
  loaded: false,
});

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.initAuth, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AuthActions.loadAuthSuccess, (state, {auth}) =>
    authAdapter.setAll(auth, {...state, loaded: true})
  ),
  on(AuthActions.loadAuthFailure, (state, {error}) => ({...state, error})),
  on(AuthActions.login, (state) => ({...state, loading: true})),
  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    user: AuthActions.loginSuccess,
    loading: false,
  })),
  on(AuthActions.loginFailure, (state) => ({
    ...state,
    user: null,
    loading: false,
  }))
);

export function authReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
