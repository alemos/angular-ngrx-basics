import { Injectable } from '@angular/core';
import { AppService } from './app.service';

export interface IAppConfig {
  config: any;
}

@Injectable({
  providedIn: 'root',
})
export class AppConfig implements IAppConfig {
  config: any;

  constructor(private appService: AppService) {}

  async load() {
    try {
      this.config = await this.appService.getConfiguration();
    } catch (error) {
      console.error('Error geting configuration');
    }
  }
}

export function _cfgInitializerFn(appConfig: AppConfig) {
  return () => {
    return appConfig.load();
  };
}
