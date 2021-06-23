import { Component } from '@angular/core';
import { YoutubeSearchService } from '../services/youtube-search.service';

@Component({
  selector: 'app-favorites-count',
  templateUrl: './favorites-count.component.html',
  styleUrls: ['./favorites-count.component.css']
})
export class FavoritesCountComponent {

  constructor (public youtubeSearchService: YoutubeSearchService) {
  }

  agInit(): void {
  }

}
