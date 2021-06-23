import { Component, OnInit } from '@angular/core';
import { YoutubeSearchService } from '../services/youtube-search.service';
import { FavoritesCountComponent } from '../favorites-count/favorites-count.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{

  statusBar = {
    statusPanels: [{ statusPanel: 'favoritesCountComponent' }]
  };

  frameworkComponents = {favoritesCountComponent: FavoritesCountComponent};

  constructor(public youtubeSearchService: YoutubeSearchService) { }

  ngOnInit(): void {
    this.youtubeSearchService.favorites = JSON.parse(<string>localStorage.getItem('favorites')) || [];
    this.youtubeSearchService.favorites$.next(this.youtubeSearchService.favorites);
    this.youtubeSearchService.allResultsInitsCount++
  }

  clearMemory(): void {
    this.youtubeSearchService.favorites = [];
    this.youtubeSearchService.favorites$.next([]);
    localStorage.removeItem('favorites');
    // @ts-ignore
    this.youtubeSearchService.rowDataArray = this.youtubeSearchService.rowDataArray.map((item: any) => ({
      ...item, checkbox: false
    }));
    this.youtubeSearchService.rowData$.next(this.youtubeSearchService.rowDataArray);
  }

}
