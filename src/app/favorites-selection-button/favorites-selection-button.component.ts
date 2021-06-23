import { Component, OnInit } from '@angular/core';
import { YoutubeSearchService } from '../services/youtube-search.service';

@Component({
  selector: 'app-favorites-selection-button',
  templateUrl: './favorites-selection-button.component.html',
  styleUrls: ['./favorites-selection-button.component.css']
})
export class FavoritesSelectionButtonComponent implements OnInit {

  params: any;
  buttonText: any;

  constructor(public youtubeSearchService: YoutubeSearchService) { }

  ngOnInit(): void {
    this.buttonText = (!this.youtubeSearchService.allResultsInitsCount || !this.youtubeSearchService.show)
      ? 'Show favorites selection' : 'Hide favorites selection';
  }

  agInit(params: any): void {
    this.params = params;
  }

  showFavoritesSelections() {
    this.youtubeSearchService.show = !this.youtubeSearchService.show;
    if (this.youtubeSearchService.show) {
      this.buttonText = 'Hide favorites selection';
    } else {
      this.buttonText = 'Show favorites selection';
    }
    this.params.columnApi.setColumnVisible('checkbox', this.youtubeSearchService.show);
  }

}
