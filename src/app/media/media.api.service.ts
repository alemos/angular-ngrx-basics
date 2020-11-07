import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { app_consts as config } from '../app.const';

@Injectable({ providedIn: 'root' })
export class MediaApiService {
  constructor(private http: HttpClient) {}

  getTopRatedMovies(): Observable<any> {
    const reqUrl: string = `${config.api_url}/movie/top_rated`;

    return this.http.get(reqUrl).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  getTopRatedTv(): Observable<any> {
    const reqUrl: string = `${config.api_url}/tv/top_rated`;

    return this.http.get(reqUrl).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  searchMedia(searchParams: any): Observable<any> {
    const reqUrl: string = `${config.api_url}/search/multi?&query=${searchParams}`;

    return this.http.get(reqUrl).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  getMediaDetail(id: number): Observable<any> {
    const reqUrl: string = `${config.api_url}/movie/${id}`;

    return this.http.get(reqUrl).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }

  getMediaVideo(id: number): Observable<any> {
    const reqUrl: string = `${config.api_url}/movie/${id}/videos`;

    return this.http.get(reqUrl).pipe(
      map((response) => response),
      catchError((error) => throwError(error))
    );
  }
}
