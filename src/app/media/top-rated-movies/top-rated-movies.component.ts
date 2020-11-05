import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromApp from '../../store/reducers';
import { ITopRatedMedia } from '../media.model';
import * as MediaActions from '../store/actions';
import * as fromMediaStore from '../store/index';

@Component({
  selector: 'top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent implements OnInit, OnDestroy {
  observablesDispose$: Subject<void> = new Subject();
  topRatedMovies: ITopRatedMedia;
  mediaData$: Observable<ITopRatedMedia>;
  configData$: Observable<ITopRatedMedia>;

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(MediaActions.getTopRatedMovies());
    this.mediaData$ = this.store.pipe(
      select(fromMediaStore.selectTopRatedMoviesState)
    );

    this.mediaData$
      .pipe(takeUntil(this.observablesDispose$))
      .subscribe((movies: ITopRatedMedia) => {
        this.topRatedMovies = movies;
      });
  }

  ngOnDestroy() {
    this.observablesDispose$.next();
    this.observablesDispose$.complete();
  }
}
