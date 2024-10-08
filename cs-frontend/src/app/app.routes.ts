import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { Routes, provideRouter } from '@angular/router';
import { EpisodesComponent } from './features/list/component/episodes.component'
import { DetailsComponent } from './features/details/component/details.component'


export const appRoutes: Routes = [
  {path: 'episodes', component: EpisodesComponent,},  
  {path: 'episode/:id', component: DetailsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  
    provideRouter(appRoutes)  
  ]
});