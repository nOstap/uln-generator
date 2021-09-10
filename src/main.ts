import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDElnpXlTOvYdGxInc_pz21FMvXKoMA6FY',
  authDomain: 'uln-generator.firebaseapp.com',
  projectId: 'uln-generator',
  storageBucket: 'uln-generator.appspot.com',
  messagingSenderId: '485207566992',
  appId: '1:485207566992:web:207f1f15319bbd79c50615',
  measurementId: 'G-S11XV67NW3'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
