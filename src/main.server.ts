import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationRef, APP_ID } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app/app.config';

export default function bootstrap(): Promise<ApplicationRef> {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideServerRendering(),
      { provide: APP_ID, useValue: 'madexdame-app' },
      ...(appConfig.providers || []),
    ],
  });
}
