import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { SearchListComponent } from './search-list/search-list.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { TopRatedTvComponent } from './top-rated-tv/top-rated-tv.component';
import { HttpClientModule } from '@angular/common/http';
import { MediaApiService } from './media.api.service';
import { StoreModule } from '@ngrx/store';
import * as fromMedia from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { MediaEffects } from './store/effects';
import { CommonModule } from '@angular/common';
import { mediaStateFeatureKey } from './store';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    StoreModule.forFeature(mediaStateFeatureKey, fromMedia.mediaReducer),
    EffectsModule.forFeature([MediaEffects]),
  ],
  declarations: [
    TopRatedMoviesComponent,
    TopRatedTvComponent,
    SearchListComponent,
    MediaDetailsComponent,
  ],
  providers: [MediaApiService],
})
export class MediaModule {}
