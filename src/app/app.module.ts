import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MediaModule } from './media/media.module';
import { ComponentsModule } from './components/components.module';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppConfig, _cfgInitializerFn } from './app.config';
import { ConfigFailoverComponent } from './components/config-failover/config-failover.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MediaModule,
    ComponentsModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: _cfgInitializerFn,
      multi: true,
      deps: [AppConfig],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {
  constructor(private _c: AppConfig) {}
  ngDoBootstrap(app: ApplicationRef) {
    const component: any = this._c.config
      ? AppComponent
      : ConfigFailoverComponent;

    app.bootstrap(component);
  }
}
