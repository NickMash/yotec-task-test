import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import Helper from '../helpers/prepare-row-data';
import Data from '../helpers/mock-data';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ThumbnailsImageComponent } from '../thumbnails-image/thumbnails-image.component';
import { TitleLinkComponent } from '../title-link/title-link.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyCoLEzHXFMH7zi1Zeq4ruV0uqFtClBMQFw';
  private youtubeUrl = 'https://www.youtube.com/watch?v=';

  rowData$ = new BehaviorSubject([]);
  favorites$ = new BehaviorSubject([]);
  favorites = [];
  checked = false;
  rowDataArray = [];
  show = false;
  allResultsInitsCount = 0;

  columnDefs(isAllResults?: boolean, checkBoxStyle?: any) {
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
        headerComponentFramework: isAllResults ? CheckboxComponent : '',
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

  constructor(private http: HttpClient) {}

  getVideos(inputValue: string, location: string, sorting: string, quantity: number): Observable <any> {
    const url = `${this.API_URL}?q=${inputValue.toLowerCase()}?location=${location.toLowerCase()}?order=`+
      `${sorting.toLowerCase()}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=${quantity.toString()}`;
    return this.http.get(url)
      .pipe(
        map((response: any) => Helper.prepareRowData(response))
      );
  }

  // TODO Use this function instead 'getVideos' higher if you got 403 error. Here is mock data used. Or use another API_TOKEN.
  // getVideos(inputValue: string, location: string, sorting: string, quantity: number) {
  //   this.rowDataArray = Helper.prepareRowData(Data.data);
  //   this.rowData$.next(this.rowDataArray);
  //   return this.rowData$;
  // }

  handleSearch(inputValue: string = '', location: string = '', sorting: string = '', quantity = 25): void {
      this.getVideos(inputValue, location, sorting, quantity).subscribe(value => {
          // @ts-ignore
          this.rowDataArray = value.map((item: any) => ({...item, checkbox: false}));
          this.rowData$.next(this.rowDataArray);
      });
  }

  getUrl(id: any) {
    return this.youtubeUrl + id.toString()
  }

  cellRenderer(checkBoxStyle: any, params: any) {
    let input = document.createElement("input");
    input.classList.add(checkBoxStyle);
    input.type = "checkbox";
    input.checked = params.value;
    input.addEventListener('click', (event) => {
      const arrItem = this.rowDataArray.find((item: any) => params.data.videoId === item.videoId);
      // @ts-ignore
      arrItem.checkbox = !arrItem.checkbox;
      this.rowData$.next(this.rowDataArray);
      this.favorites =
        this.rowDataArray.filter((item: any) => item.checkbox === true);
      this.favorites$.next(this.favorites);
      this.addToFavoritesToLocalStorage();
      this.checked = this.favorites.length === this.rowDataArray.length;
    });
    return input;
  }

  addToFavoritesToLocalStorage(): any {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
