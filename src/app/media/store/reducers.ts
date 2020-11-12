import { Action, combineReducers, createReducer, on } from '@ngrx/store';
import * as MediaActions from './actions';

export interface IMediaState {
  topRatedTv: ITopRatedTvState;
  search: ISearchState;
  topRatedMovies: ITopRatedMoviesState;
  details: IDetailsState;
}

export interface IDetailsState {
  id: string;
  data: any;
  video: any;
  loading: boolean;
}
const initialDetailsState: IDetailsState = {
  id: null,
  data: null,
  video: null,
  loading: false,
};
const _detailsReducer = createReducer(
  initialDetailsState,
  on(MediaActions.setMediaDetails, (state, action) => ({
    ...state,
    id: action.id,
    loading: true,
  })),

  on(MediaActions.mediaDetailsSuccess, (state, action) => ({
    ...state,
    media: action.data,
    loading: false,
  })),

  on(MediaActions.mediaDetailsFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
    loading: false,
  })),

  on(MediaActions.setMediaDetailsVideo, (state, action) => ({
    ...state,
    id: action.id,
    loading: true,
  })),

  on(MediaActions.mediaDetailsVideoSuccess, (state, action) => ({
    ...state,
    video: action.video,
    loading: false,
  })),

  on(MediaActions.mediaDetailsVideoFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
    loading: false,
  }))
);

export interface ISearchState {
  query: string;
  error: any;
  loading: boolean;
}
const initialSearchState: ISearchState = {
  query: null,
  error: null,
  loading: false,
};
const _searchReducer = createReducer(
  initialSearchState,
  on(MediaActions.setSearchQuery, (state, action) => ({
    ...state,
    query: action.query,
    loading: true,
  })),

  on(MediaActions.searchSuccess, (state, action) => ({
    ...state,
    media: action.media,
    loading: false,
  })),

  on(MediaActions.searchFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
    loading: false,
  }))
);

export interface ITopRatedMoviesState {
  media: any;
  error: any;
  loading: boolean;
}
const initialMediaState: ITopRatedMoviesState = {
  media: null,
  error: null,
  loading: false,
};
const _topRatedMoviesReducer = createReducer(
  initialMediaState,
  on(MediaActions.getTopRatedMovies, (state, action) => ({
    ...state,
    loading: true,
  })),

  on(MediaActions.getTopRatedMoviesSuccess, (state, action) => ({
    ...state,
    media: action.media,
    loading: false,
  })),

  on(MediaActions.getTopRatedMoviesFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
    loading: false,
  }))
);

export interface ITopRatedTvState {
  media: any;
  error: any;
  loading: boolean;
}
const initialITopRatedTvState: ITopRatedTvState = {
  media: null,
  error: null,
  loading: false,
};
const _topRatedTvReducer = createReducer(
  initialITopRatedTvState,
  on(MediaActions.getTopRatedTv, (state, action) => ({
    ...state,
    loading: true,
  })),

  on(MediaActions.getTopRatedTvSuccess, (state, action) => ({
    ...state,
    media: action.media,
    loading: false,
  })),

  on(MediaActions.getTopRatedTvFailure, (state, action) => ({
    ...state,
    error: action.errorMsg,
    loading: false,
  }))
);

export function mediaReducer(state: any, action: Action) {
  return combineReducers({
    topRatedTv: _topRatedTvReducer,
    search: _searchReducer,
    topRatedMovies: _topRatedMoviesReducer,
    details: _detailsReducer,
  })(state, action);
}
