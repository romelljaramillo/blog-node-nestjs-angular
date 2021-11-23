import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsPageRoutingModule } from './post-routing.module';

import { PostsPage } from './posts.page';
import { ViewpostsComponent } from './viewposts/viewposts.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPageRoutingModule,
    PipesModule
  ],
  declarations: [PostsPage, ViewpostsComponent, ViewpostComponent, HeaderComponent, SearchComponent]
})
export class PostsPageModule {}
