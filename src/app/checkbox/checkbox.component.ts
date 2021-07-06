import { Component } from '@angular/core';
import { YoutubeSearchService } from '../services/youtube-search.service';
import { FormControl } from '@angular/forms';
import { TableRendererService } from '../services/table-renderer.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  checkbox = new FormControl('');

  constructor(public youtubeSearchService: YoutubeSearchService, public tableRendererService: TableRendererService) { }

  agInit(): void {
  }

  changeCheck() {
    // @ts-ignore
    this.youtubeSearchService.rowDataArray = this.youtubeSearchService.rowDataArray.map((item: any) => ({
      ...item, checkbox: !this.checkbox.value
    }));
    this.youtubeSearchService.rowData$.next(this.youtubeSearchService.rowDataArray);
    this.youtubeSearchService.favorites =
      this.youtubeSearchService.rowDataArray.filter((item: any) => item.checkbox === true);
    this.youtubeSearchService.favorites$.next(this.youtubeSearchService.favorites);
    this.tableRendererService.addToFavoritesToLocalStorage();
  }

}
