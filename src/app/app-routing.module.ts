import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuComponent} from './menu/menu.component';
import {CommandeComponent} from './commande/commande.component';
import {LoginComponent} from './login/login.component';
import {LunchComponent} from './menu/lunch/lunch.component';
import {DinnerComponent} from './menu/dinner/dinner.component';
import {BreakfastComponent} from './menu/breakfast/breakfast.component';
import {PanierComponent} from './panier/panier.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Panier', component: PanierComponent },
  { path: 'Menu', component: MenuComponent , children: [
      { path: 'lunch', component: LunchComponent },
      { path: 'dinner', component: DinnerComponent },
      { path: 'breakfast', component: BreakfastComponent }
    ] },
  { path: 'Command', component: CommandeComponent },
  { path: 'Login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
