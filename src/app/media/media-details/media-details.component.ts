import { Location } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import * as MediaActions from '../store/actions';
import * as fromApp from '../../store/reducers';
import { Observable, Subject } from 'rxjs';
import * as fromMediaStore from '../store/index';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
})
export class MediaDetailsComponent implements OnInit, OnDestroy {
  observablesDispose$: Subject<void> = new Subject();
  @Input() mediaId: number;
  detailsData$: Observable<any>;
  detailsVideoData$: Observable<any>;
  details: any;
  base_url: string;
  img_url: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<fromApp.AppState>,
    private _c: AppConfig
  ) {}

  ngOnInit() {
    this.base_url = `${this._c.config.images?.base_url}w185`;

    this.route.params.subscribe((p) => {
      if (p && p.id) {
        const id = parseInt(p.id);
        this.store.dispatch(MediaActions.setMediaDetails({ id }));
        this.store.dispatch(MediaActions.setMediaDetailsVideo({ id }));
      }
    });

    this.detailsData$ = this.store.pipe(
      select(fromMediaStore.selectDetailsState)
    );

    this.detailsData$
      .pipe(takeUntil(this.observablesDispose$))
      .subscribe((data: any) => {
        this.details = data;
        this.img_url = `${this.base_url}${data.media?.poster_path}`;
      });
  }

  back() {
    this.location.back();
  }

  ngOnDestroy() {
    this.observablesDispose$.next();
    this.observablesDispose$.complete();
  }
}
