import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounterComponent} from './components/counter/counter.component';
import { PhonebookComponent } from './components/phonebook/phonebook.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  {path: '',
  redirectTo: '/landing',
  pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'phonebook', component: PhonebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
