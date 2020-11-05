import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { ITopRatedMedia } from '../media.model';
import * as fromApp from '../../store/reducers';
import * as MediaActions from '../store/actions';
import * as fromMediaStore from '../store/index';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'top-rated-tv',
  templateUrl: './top-rated-tv.component.html',
  styleUrls: ['./top-rated-tv.component.scss'],
})
export class TopRatedTvComponent implements OnInit, OnDestroy {
  observablesDispose$: Subject<void> = new Subject();
  topRatedTv: ITopRatedMedia;
  mediaData$: Observable<ITopRatedMedia>;

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(MediaActions.getTopRatedTv());
    this.mediaData$ = this.store.pipe(
      select(fromMediaStore.selectTopRatedTvState)
    );

    this.mediaData$
      .pipe(takeUntil(this.observablesDispose$))
      .subscribe((tvShows: ITopRatedMedia) => {
        this.topRatedTv = tvShows;
      });
  }

  ngOnDestroy() {
    this.observablesDispose$.next();
    this.observablesDispose$.complete();
  }
}
