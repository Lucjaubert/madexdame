import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter(routes, {
      withInMemoryScrolling: {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      },
    }),
    provideHttpClient(),
    provideAnimations(),
  ]
}).catch(err => console.error(err));
