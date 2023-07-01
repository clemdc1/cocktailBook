import { ApplicationConfig } from '@angular/core';
import { APP_ROUTES } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES), provideHttpClient()],
};
