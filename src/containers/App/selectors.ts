/**
 * The global state selectors
 */
import { createSelector } from 'reselect';

const selectGlobal = () => (state) => state.global;

const getVisibility = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.show
);

export {
  getVisibility,
};
