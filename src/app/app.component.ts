import { Component, OnInit } from '@angular/core';
import { YoutubeSearchService } from './services/youtube-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private youtubeSearchService: YoutubeSearchService) {}

  ngOnInit() {
    this.youtubeSearchService.handleSearch();
  }

}
