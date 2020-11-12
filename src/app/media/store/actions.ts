import { createAction, props } from '@ngrx/store';

export const setSearchQuery = createAction(
  '[Set Search Query] Search Media',
  props<{ query: string }>()
);

export const searchSuccess = createAction(
  '[Media/API] Search Success',
  props<{ media: any }>()
);

export const searchFailure = createAction(
  '[Media/API] Search Failure',
  props<{ errorMsg: string }>()
);

// Top rated movies
export const getTopRatedMovies = createAction(
  '[Media/API] get top rated movies'
);

export const getTopRatedMoviesSuccess = createAction(
  '[Media/API] get top rated movies success',
  props<{ media: Object }>()
);

export const getTopRatedMoviesFailure = createAction(
  '[Media/API] get top rated movies failure',
  props<{ errorMsg: string }>()
);

export const getTopRatedTv = createAction('[Media/API] get top rated tv shows');

export const getTopRatedTvSuccess = createAction(
  '[Media/API] get top rated tv shows success',
  props<{ media: Object }>()
);

export const getTopRatedTvFailure = createAction(
  '[Media/API] get top rated tv shows failure',
  props<{ errorMsg: string }>()
);

export const setMediaDetails = createAction(
  '[Set Media Details] Media Details',
  props<{ id: any }>()
);

export const mediaDetailsSuccess = createAction(
  '[Media/API] Media Details Success',
  props<{ data: any }>()
);

export const mediaDetailsFailure = createAction(
  '[Media/API] Media Details Failure',
  props<{ errorMsg: string }>()
);

export const setMediaDetailsVideo = createAction(
  '[Media/API] Media Details Video',
  props<{ id: any }>()
);

export const mediaDetailsVideoSuccess = createAction(
  '[Media/API] Media Details VideoSuccess',
  props<{ video: any }>()
);

export const mediaDetailsVideoFailure = createAction(
  '[Media/API] Media Details Video Failure',
  props<{ errorMsg: string }>()
);
