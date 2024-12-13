import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewpageComponent } from './components/newpage/newpage.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newpage', component: NewpageComponent },
  { path: '**', redirectTo: '' },
];
