import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromApp from '../../store/reducers';
import * as fromMediaStore from '../store/index';

@Component({
  selector: 'search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit, OnDestroy {
  observablesDispose$: Subject<void> = new Subject();
  searchData$: Observable<any>;
  searchData: any;

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit() {
    this.searchData$ = this.store.pipe(
      select(fromMediaStore.selectSearchState)
    );

    this.searchData$
      .pipe(takeUntil(this.observablesDispose$))
      .subscribe((data: any) => {
        this.searchData = data;
      });
  }

  ngOnDestroy() {
    this.observablesDispose$.next();
    this.observablesDispose$.complete();
  }
}
