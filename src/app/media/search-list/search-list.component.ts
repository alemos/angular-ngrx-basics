import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../../store/reducers';
import * as fromMediaStore from '../store/index';

@Component({
  selector: 'search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  searchData$: Observable<any> = this.store.pipe(
    select(fromMediaStore.selectSearchState)
  );

  constructor(private store: Store<fromApp.AppState>) {}
}
