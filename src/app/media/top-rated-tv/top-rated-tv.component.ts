import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MediaActions from '../store/actions';
import * as fromMediaStore from '../store/index';
import { ITopRatedTvState } from '../store/reducers';

@Component({
  selector: 'top-rated-tv',
  templateUrl: './top-rated-tv.component.html',
  styleUrls: ['./top-rated-tv.component.scss'],
})
export class TopRatedTvComponent {
  mediaData$: Observable<ITopRatedTvState> = this.store.pipe(
    select(fromMediaStore.selectTopRatedTvState)
  );

  constructor(private store: Store<ITopRatedTvState>) {
    this.store.dispatch(MediaActions.getTopRatedTv());
  }
}
