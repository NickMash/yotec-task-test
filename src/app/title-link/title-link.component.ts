import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { YoutubeSearchService } from '../services/youtube-search.service';

@Component({
  selector: 'app-title-link',
  templateUrl: './title-link.component.html',
  styleUrls: ['./title-link.component.css']
})
export class TitleLinkComponent {

  url: string | undefined;
  title: string | undefined;

  constructor(public youtubeSearchService: YoutubeSearchService) { }

  agInit(params: ICellRendererParams) {
    this.url = this.youtubeSearchService.getUrl(params.node.data.videoId);
    this.title = params.data.title;
  }

}
