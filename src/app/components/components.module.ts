import { NgModule } from '@angular/core';
import { MediaListComponent } from './media-list/media-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MediaCardComponent } from './media-card/media-card.component';
import { ConfigFailoverComponent } from './config-failover/config-failover.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [
    PageNotFoundComponent,
    MediaListComponent,
    HeaderComponent,
    SearchComponent,
    NavComponent,
    MediaCardComponent,
    ConfigFailoverComponent,
  ],
  exports: [
    PageNotFoundComponent,
    MediaListComponent,
    HeaderComponent,
    SearchComponent,
    NavComponent,
    MediaCardComponent,
    ConfigFailoverComponent,
  ],
})
export class ComponentsModule {}
