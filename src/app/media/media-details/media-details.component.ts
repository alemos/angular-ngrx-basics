import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as MediaActions from '../store/actions';
import * as fromApp from '../../store/reducers';
import { Observable } from 'rxjs';
import * as fromMediaStore from '../store/index';
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
})
export class MediaDetailsComponent implements OnInit {
  detailsData$: Observable<any> = this.store.pipe(
    select(fromMediaStore.selectDetailsState)
  );

  base_url: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<fromApp.AppState>,
    private _c: AppConfig
  ) {
    this.base_url = `${this._c.config.images?.base_url}w185`;
  }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      if (p && p.id) {
        const id = parseInt(p.id);
        this.store.dispatch(MediaActions.setMediaDetails({ id }));
        this.store.dispatch(MediaActions.setMediaDetailsVideo({ id }));
      }
    });
  }

  back() {
    this.location.back();
  }
}
