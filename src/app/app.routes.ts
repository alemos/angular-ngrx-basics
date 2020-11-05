import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MediaDetailsComponent } from './media/media-details/media-details.component';
import { SearchListComponent } from './media/search-list/search-list.component';
import { TopRatedMoviesComponent } from './media/top-rated-movies/top-rated-movies.component';
import { TopRatedTvComponent } from './media/top-rated-tv/top-rated-tv.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'top-rated-movies',
    pathMatch: 'full',
  },
  {
    path: 'top-rated-movies',
    component: TopRatedMoviesComponent,
  },
  {
    path: 'top-rated-tv',
    component: TopRatedTvComponent,
  },
  {
    path: 'search',
    component: SearchListComponent,
  },
  {
    path: 'media-details/:id',
    component: MediaDetailsComponent,
  },

  { path: '**', component: PageNotFoundComponent },
];
