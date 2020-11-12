import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMedia from './reducers';

export const mediaStateFeatureKey = 'media';

export const selectMedia = createFeatureSelector<fromMedia.IMediaState>(
  mediaStateFeatureKey
);

export const selectTopRatedMoviesState = createSelector(
  selectMedia,
  (state: any) => state.topRatedMovies
);

export const selectTopRatedTvState = createSelector(
  selectMedia,
  (state: any) => state.topRatedTv
);

export const selectSearchState = createSelector(
  selectMedia,
  (state: any) => state.search
);

export const selectDetailsState = createSelector(
  selectMedia,
  (state: any) => state.details
);
