import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MediaActions from '../store/actions';
import * as fromMediaStore from '../store/index';
import { ITopRatedMoviesState } from '../store/reducers';

@Component({
  selector: 'top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent {
  mediaData$: Observable<ITopRatedMoviesState> = this.store.pipe(
    select(fromMediaStore.selectTopRatedMoviesState)
  );

  constructor(private store: Store<ITopRatedMoviesState>) {
    this.store.dispatch(MediaActions.getTopRatedMovies());
  }
}
