import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router'; // Added provideRouter import

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
// AppModule is no longer directly bootstrapped, but we might need its providers if they are not standalone or providedIn root.
// For now, we assume basic providers like BrowserModule and HttpClient are what's needed for AppComponent.
// If AppModule or CoreModule (imported by AppModule) set up routing or other global services not providedIn: 'root',
// they would need to be added here via importProvidersFrom(AppModule) or specific provider functions like provideRouter.

if (environment.production) {
  enableProdMode();
}

// import { provideRouter } from '@angular/router'; // Ensure this is removed or already gone

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule), // Provides essential browser services
    provideHttpClient(), // Provides HttpClient for ApiService
    provideRouter([]) // Provides routing (empty for now, matches previous RouterModule.forRoot([]))
    // If CoreModule had other essential non-root providers after its cleanup,
    // those would need to be imported here too.
  ]
}).catch(err => console.error(err));
