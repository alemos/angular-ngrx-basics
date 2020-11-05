import { Action, combineReducers, createReducer, on } from '@ngrx/store';
import * as MediaActions from './actions';

export interface IMediaState {
  topRatedTv: ITopRatedTvState;
  search: ISearchState;
  topRatedMovies: ITopRatedMoviesState;
  config: IConfigState;
  details: IDetailsState;
}

// DETAILS REDUCER
export interface IDetailsState {
  id: string;
  data: any;
  video: any;
}
const initialDetailsState: IDetailsState = {
  id: null,
  data: null,
  video: null,
};
const _detailsReducer = createReducer(
  initialDetailsState,
  on(MediaActions.setMediaDetails, (state, action) => ({
    ...state,
    id: action.id,
  })),

  on(MediaActions.mediaDetailsSuccess, (state, action) => ({
    ...state,
    media: action.data,
  })),

  on(MediaActions.mediaDetailsFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
  })),

  on(MediaActions.setMediaDetailsVideo, (state, action) => ({
    ...state,
    id: action.id,
  })),

  on(MediaActions.mediaDetailsVideoSuccess, (state, action) => ({
    ...state,
    video: action.video,
  })),

  on(MediaActions.mediaDetailsVideoFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
  }))
);

// CONFIG REDUCER
export interface IConfigState {
  config: any;
}
const initialConfigState: IConfigState = {
  config: null,
};
const _configReducer = createReducer(
  initialConfigState,
  on(MediaActions.setConfig, (state, action) => ({
    ...state,
  })),

  on(MediaActions.configSuccess, (state, action) => ({
    ...state,
    config: action.config,
  })),

  on(MediaActions.configFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
  }))
);

// SEARCH REDUCER
export interface ISearchState {
  query: string;
}
const initialSearchState: ISearchState = {
  query: null,
};
const _searchReducer = createReducer(
  initialSearchState,
  on(MediaActions.setSearchQuery, (state, action) => ({
    ...state,
    query: action.query,
  })),

  on(MediaActions.searchSuccess, (state, action) => ({
    ...state,
    media: action.media,
  })),

  on(MediaActions.searchFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
  }))
);

export function searchReducer(state: ISearchState, action: Action) {
  return _searchReducer(state, action);
}

// TOP RATED MOVIES REDUCER
export interface ITopRatedMoviesState {
  media: Object;
}
const initialMediaState: ITopRatedMoviesState = {
  media: null,
};
const _topRatedMoviesReducer = createReducer(
  initialMediaState,
  on(MediaActions.getTopRatedMovies, (state, action) => ({
    ...state,
  })),

  on(MediaActions.getTopRatedMoviesSuccess, (state, action) => ({
    ...state,
    media: action.media,
  })),

  on(MediaActions.getTopRatedMoviesFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
  }))
);

// TOP RATED TV REDUCER
export interface ITopRatedTvState {
  media: Object;
}
const initialITopRatedTvState: ITopRatedTvState = {
  media: null,
};
const _topRatedTvReducer = createReducer(
  initialITopRatedTvState,
  on(MediaActions.getTopRatedTv, (state, action) => ({
    ...state,
  })),

  on(MediaActions.getTopRatedTvSuccess, (state, action) => ({
    ...state,
    media: action.media,
  })),

  on(MediaActions.getTopRatedTvFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
  }))
);

export function mediaReducer(state: any, action: Action) {
  return combineReducers({
    topRatedTv: _topRatedTvReducer,
    search: searchReducer,
    topRatedMovies: _topRatedMoviesReducer,
    config: _configReducer,
    details: _detailsReducer,
  })(state, action);
}
