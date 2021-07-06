import { Injectable } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ThumbnailsImageComponent } from '../thumbnails-image/thumbnails-image.component';
import { TitleLinkComponent } from '../title-link/title-link.component';
import { YoutubeSearchService } from './youtube-search.service';

@Injectable({
  providedIn: 'root'
})
export class TableRendererService {

  constructor(public youtubeSearchService: YoutubeSearchService) { }

  columnDefs(isAllResults?: boolean, checkBoxStyle?: any, showHeaderCheckbox?: any) {
    return [
      {
        field: 'checkbox',
        sortable: true,
        filter: true,
        hide: isAllResults,
        width: 20,
        cellRenderer: (params: any) => {
          return this.cellRenderer(checkBoxStyle, params);
        },
        headerComponentFramework: showHeaderCheckbox ? CheckboxComponent : '',
        cellStyle: {'display': 'flex', 'align-items': 'center', 'border': 'none',}
      },
      {
        field: 'thumbnails',
        sortable: true,
        filter: true,
        cellRendererFramework: ThumbnailsImageComponent,
        autoHeight: true,
        cellStyle: {'margin-top': '9px', 'border': 'none',}
      },
      {
        field: 'publishedAt',
        sortable: true,
        filter: true,
        cellStyle: {'display': 'flex', 'align-items': 'center', 'border': 'none',}
      },
      {
        field: 'title',
        sortable: true,
        filter: true,
        cellRendererFramework: TitleLinkComponent,
        cellStyle:
          {
            'white-space': 'pre-wrap',
            'line-height': 1.3,
            'font-weight': 'bold',
            'display': 'flex',
            'align-items': 'center',
            'border': 'none',
          }
      },
      {
        field: 'description',
        sortable: true,
        filter: true,
        width: 282,
        cellStyle:
          {
            'white-space': 'pre-wrap',
            'line-height': 1.3,
            'display': 'flex',
            'align-items': 'center',
            'text-align': 'justify',
            'border': 'none',
          }
      },
    ];
  }

  cellRenderer(checkBoxStyle: any, params: any) {
    let input = document.createElement("input");
    input.classList.add(checkBoxStyle);
    input.type = "checkbox";
    input.checked = params.value;
    input.addEventListener('click', (event) => {
      const arrItem = this.youtubeSearchService.rowDataArray.find((item: any) => params.data.videoId === item.videoId);
      // @ts-ignore
      arrItem.checkbox = !arrItem.checkbox;
      this.youtubeSearchService.rowData$.next(this.youtubeSearchService.rowDataArray);
      this.youtubeSearchService.favorites =
        this.youtubeSearchService.rowDataArray.filter((item: any) => item.checkbox === true);
      this.youtubeSearchService.favorites$.next(this.youtubeSearchService.favorites);
      this.addToFavoritesToLocalStorage();
      this.youtubeSearchService.checked =
        this.youtubeSearchService.favorites.length === this.youtubeSearchService.rowDataArray.length;
    });
    return input;
  }

  addToFavoritesToLocalStorage(): any {
    localStorage.setItem('favorites', JSON.stringify(this.youtubeSearchService.favorites));
  }
}
