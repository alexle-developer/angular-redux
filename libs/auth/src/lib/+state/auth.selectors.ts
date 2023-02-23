import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AUTH_FEATURE_KEY, State, authAdapter} from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const selectAuthState =
  createFeatureSelector<State>(AUTH_FEATURE_KEY);

const {selectAll, selectEntities} = authAdapter.getSelectors();

export const selectAuthLoaded = createSelector(
  selectAuthState,
  (state: State) => state.loaded
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: State) => state.error
);

export const selectAllAuth = createSelector(
  selectAuthState,
  (state: State) => selectAll(state)
);

export const selectAuthEntities = createSelector(
  selectAuthState,
  (state: State) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectAuthState,
  (state: State) => state.selectedId
);

export const selectEntity = createSelector(
  selectAuthEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
