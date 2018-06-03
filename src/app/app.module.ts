import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommandeComponent } from './commande/commande.component';
import { MenuComponent } from './menu/menu.component';
import {AppRoutingModule} from './app-routing.module';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuItemComponent } from './menu/menu-list/menu-item/menu-item.component';
import { BreakfastComponent } from './menu/breakfast/breakfast.component';
import { DinnerComponent } from './menu/dinner/dinner.component';
import { LunchComponent } from './menu/lunch/lunch.component';
import {DashboardListComponent} from './dashboard/dashboard-list/dashboard-list.component';
import { PanierComponent } from './panier/panier.component';
import { PanierAddComponent } from './panier/panier-add/panier-add.component';
import {MealService} from './shared/meal.service';
import { BreakfastItemComponent } from './menu/breakfast/breakfast-item/breakfast-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    CommandeComponent,
    MenuComponent,
    MenuListComponent,
    MenuItemComponent,
    BreakfastComponent,
    DinnerComponent,
    LunchComponent,
    DashboardListComponent,
    PanierComponent,
    PanierAddComponent,
    BreakfastItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
