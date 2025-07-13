import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getDataConnect, provideDataConnect } from '@angular/fire/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';
import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai';
import { environment } from '../environments/environment.dev';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
    providers: [
        {
            provide: FIREBASE_OPTIONS,
            useValue: environment.firebaseConfig,
        },
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),
        provideAnalytics(() => getAnalytics()),
        ScreenTrackingService,
        UserTrackingService,
        provideAppCheck(() => {
            const provider = new ReCaptchaEnterpriseProvider(environment.reCaptchaKey);
            return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
        }),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        provideDataConnect(() => getDataConnect(connectorConfig)),
        provideTanStackQuery(new QueryClient()),
        provideFunctions(() => getFunctions()),
        provideMessaging(() => getMessaging()),
        providePerformance(() => getPerformance()),
        provideStorage(() => getStorage()),
        provideRemoteConfig(() => getRemoteConfig()),
        provideVertexAI(() => getVertexAI()),
    ],
};
