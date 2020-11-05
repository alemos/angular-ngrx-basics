import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import * as fromApp from '../../store/reducers';
import * as MediaActions from '../../media/store/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.searchForm = this.formBuilder.group({
      query: new FormControl(null),
    });

    this.searchForm.controls.query.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((query) => {
        if (query.length > 2) {
          this.store.dispatch(MediaActions.setSearchQuery({ query }));
          if (this.router.url !== '/search') this.router.navigate(['/search']);
        }
        if (query.length < 3) {
          if (this.router.url === '/search')
            this.router.navigate(['/top-rated-movies']);
        }
      });
  }
}
