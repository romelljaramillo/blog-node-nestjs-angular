import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    PipesModule
  ],
  declarations: [UserPage, ViewusersComponent, ViewuserComponent, HeaderComponent, SearchComponent]
})
export class UserPageModule { }
