import { ActionReducerMap } from '@ngrx/store';
import * as fromMedia from '../media/store/reducers';

export interface AppState {
  media: fromMedia.IMediaState;
}

export const reducers: ActionReducerMap<AppState> = {
  media: null,
};
