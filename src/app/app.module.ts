import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { AllResultsComponent } from './all-results/all-results.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LogoComponent } from './logo/logo.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchLineComponent } from './search-line/search-line.component';
import { VideoListComponent } from './video-list/video-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { YoutubeSearchService } from './services/youtube-search.service';
import { HttpClientModule } from '@angular/common/http';
import { ThumbnailsImageComponent } from './thumbnails-image/thumbnails-image.component';
import { FavoritesSelectionButtonComponent } from './favorites-selection-button/favorites-selection-button.component';
import { FavoritesCountComponent } from './favorites-count/favorites-count.component';
import { TotalCountComponent } from './total-count/total-count.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TitleLinkComponent } from './title-link/title-link.component';
import 'ag-grid-enterprise';


@NgModule({
  declarations: [
    AppComponent,
    AllResultsComponent,
    FavoritesComponent,
    LogoComponent,
    MenuItemComponent,
    NavigationComponent,
    SearchLineComponent,
    VideoListComponent,
    ThumbnailsImageComponent,
    FavoritesSelectionButtonComponent,
    FavoritesCountComponent,
    TotalCountComponent,
    CheckboxComponent,
    TitleLinkComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([ThumbnailsImageComponent]),
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [YoutubeSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
