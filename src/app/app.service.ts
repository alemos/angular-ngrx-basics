import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { app_consts } from './app.const';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) {}

  getConfiguration(): Promise<any> {
    const reqUrl: string = `${app_consts.api_url}/configuration`;

    return new Promise((resolve, reject) => {
      this.http
        .get(reqUrl)
        .toPromise()
        .then(
          (response) => resolve(response),
          (error) => reject(error)
        );
    });
  }
}
