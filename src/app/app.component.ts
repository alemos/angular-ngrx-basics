import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromApp from './store/reducers';
import * as MediaActions from './media/store/actions';
import { Observable } from 'rxjs';
import { ITopRatedMedia } from './media/media.model';
import * as fromMediaStore from './media/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  configData$: Observable<ITopRatedMedia>;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.dispatch(MediaActions.setConfig());

    this.configData$ = this.store.pipe(
      select(fromMediaStore.selectConfigState)
    );

    this.configData$.subscribe((c: any) => {
      if (c && c.config) {
        localStorage.setItem('config', JSON.stringify(c.config));
      }
    });
  }
}
