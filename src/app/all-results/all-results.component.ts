import { Component, OnInit } from '@angular/core';
import { YoutubeSearchService } from '../services/youtube-search.service';
import { FavoritesCountComponent } from '../favorites-count/favorites-count.component';
import { TotalCountComponent } from '../total-count/total-count.component';
import { FavoritesSelectionButtonComponent } from '../favorites-selection-button/favorites-selection-button.component';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css']
})
export class AllResultsComponent implements OnInit {

  statusBar = {
      statusPanels: [
        { statusPanel: 'favoritesSelectionButtonComponent' },
        { statusPanel: 'favoritesCountComponent' },
        { statusPanel: 'totalCountComponent' },
      ]
    };

  frameworkComponents = {
    favoritesCountComponent: FavoritesCountComponent,
    totalCountComponent: TotalCountComponent,
    favoritesSelectionButtonComponent: FavoritesSelectionButtonComponent,
  };
  isAllResults: any;
  showHeaderCheckbox: any;

  constructor(public youtubeSearchService: YoutubeSearchService) { }

  ngOnInit() {
    if (!this.youtubeSearchService.allResultsInitsCount) {
      this.isAllResults = true;
    } else {
      this.isAllResults = !this.youtubeSearchService.show;
    }
    this.showHeaderCheckbox = true;
    const localStorageFavorites = JSON.parse(<string>localStorage.getItem('favorites')) || [];
    localStorageFavorites.forEach((item: any) => {
      // @ts-ignore
      this.youtubeSearchService.rowDataArray.find((elem) => item.videoId === elem.videoId)?.checkbox = true;
    });
    this.youtubeSearchService.rowData$.next(this.youtubeSearchService.rowDataArray);
    this.youtubeSearchService.favorites = localStorageFavorites || [];
    this.youtubeSearchService.favorites$.next(this.youtubeSearchService.favorites);
  }

}
