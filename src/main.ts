import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// main.ts is the first class that will be executed when you run an angular application
// bootstrapModule(AppModule) will initialize the app.module.ts file
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
