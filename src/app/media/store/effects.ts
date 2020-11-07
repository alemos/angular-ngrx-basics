import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as MediaActions from './actions';
import { MediaApiService } from '../media.api.service';
import { of } from 'rxjs';
import { ITopRatedMedia } from '../media.model';

@Injectable()
export class MediaEffects {
  constructor(
    private mediaService: MediaApiService,
    private actions$: Actions
  ) {}

  topRatedMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MediaActions.getTopRatedMovies),
      mergeMap(() =>
        this.mediaService
          .getTopRatedMovies()
          .pipe(
            map((media: ITopRatedMedia) =>
              MediaActions.getTopRatedMoviesSuccess({ media })
            )
          )
      ),
      catchError((error) => {
        const errorMsg: string = 'Error fetching Top rated movies';
        console.error(errorMsg, error);
        return of(MediaActions.getTopRatedMoviesFailure({ errorMsg }));
      })
    )
  );

  topRatedTv$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MediaActions.getTopRatedTv),
      mergeMap(() =>
        this.mediaService
          .getTopRatedTv()
          .pipe(
            map((media: ITopRatedMedia) =>
              MediaActions.getTopRatedTvSuccess({ media })
            )
          )
      ),
      catchError((error) => {
        const errorMsg: string = 'Error fetching Top rated movies';
        console.error(errorMsg, error);
        return of(MediaActions.getTopRatedTvFailure({ errorMsg }));
      })
    )
  );

  searchMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MediaActions.setSearchQuery),
      mergeMap((actions) =>
        this.mediaService
          .searchMedia(actions.query)
          .pipe(
            map((media: ITopRatedMedia) =>
              MediaActions.searchSuccess({ media })
            )
          )
      ),
      catchError((error) => {
        const errorMsg: string = 'Error fetching search data';
        console.error(errorMsg, error);
        return of(MediaActions.searchFailure({ errorMsg }));
      })
    )
  );

  mediaDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MediaActions.setMediaDetails),
      mergeMap((actions) =>
        this.mediaService
          .getMediaDetail(actions.id)
          .pipe(map((data: any) => MediaActions.mediaDetailsSuccess({ data })))
      ),
      catchError((error) => {
        const errorMsg: string = 'Error fetching Details';
        console.error(errorMsg, error);
        return of(MediaActions.mediaDetailsFailure({ errorMsg }));
      })
    )
  );

  mediaVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MediaActions.setMediaDetailsVideo),
      mergeMap((actions) =>
        this.mediaService
          .getMediaVideo(actions.id)
          .pipe(
            map((video: any) =>
              MediaActions.mediaDetailsVideoSuccess({ video })
            )
          )
      ),
      catchError((error) => {
        const errorMsg: string = 'Error fetching Details Video';
        console.error(errorMsg, error);
        return of(MediaActions.mediaDetailsVideoFailure({ errorMsg }));
      })
    )
  );
}
