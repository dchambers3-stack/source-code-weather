import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {  provideClientHydration } from '@angular/platform-browser';
import {  provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(), provideFirebaseApp(() => initializeApp({"projectId":"weather-app-32618","appId":"1:717614138070:web:b0256b723f5e0fee4f7f77","storageBucket":"weather-app-32618.appspot.com","apiKey":"AIzaSyBp2Nv9goEMqOgmjip2cVFobCWUEoqkfFk","authDomain":"weather-app-32618.firebaseapp.com","messagingSenderId":"717614138070","measurementId":"G-KQH3FFYGSQ"})), provideAnalytics(() => getAnalytics()), ScreenTrackingService]
  
  
};
