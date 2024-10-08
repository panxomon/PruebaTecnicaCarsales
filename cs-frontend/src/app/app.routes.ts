import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { Routes, provideRouter } from '@angular/router';
import { EpisodeListComponent } from './components/episode-list/episode-list.component'; 


export const appRoutes: Routes = [
  {path: 'episode', component: EpisodeListComponent,},  
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  
    provideRouter(appRoutes)  
  ]
});