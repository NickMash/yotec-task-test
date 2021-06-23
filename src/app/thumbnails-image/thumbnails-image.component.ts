import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-thumbnails-image',
  templateUrl: './thumbnails-image.component.html',
  styleUrls: ['./thumbnails-image.component.css']
})
export class ThumbnailsImageComponent {

  url: string | undefined;

  agInit(params: ICellRendererParams) {
    this.url = params.value;
  }

}
