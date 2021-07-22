import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import Helper from '../helpers/prepare-row-data';
import Data from '../helpers/mock-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  public API_URL = 'https://www.googleapis.com/youtube/v3/search';
  public API_TOKEN = 'AIzaSyCoLEzHXFMH7zi1Zeq4ruV0uqFtClBMQFw';
  public youtubeUrl = 'https://www.youtube.com/watch?v=';

  rowData$ = new BehaviorSubject([]);
  favorites$ = new BehaviorSubject([]);
  favorites = [];
  checked = false;
  rowDataArray = [];
  show = false;
  allResultsInitsCount = 0;

  constructor(private http: HttpClient) {}

  getVideos(inputValue: string, location: string, sorting: string, quantity: number): Observable <any> {
    const url = `${this.API_URL}?q=${inputValue.toLowerCase()}?location=${location.toLowerCase()}?order=`+
      `${sorting.toLowerCase()}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=${quantity.toString()}`;
    return this.http.get(url)
      .pipe(
        map((response: any) => Helper.prepareRowData(response))
      );
  }

  // TODO Use this function instead of 'getVideos' higher if you got 403 error. Here is mock data used. Or use another API_TOKEN.
  // getVideos(inputValue: string, location: string, sorting: string, quantity: number) {
  //   this.rowDataArray = Helper.prepareRowData(Data.data);
  //   this.rowData$.next(this.rowDataArray);
  //   return this.rowData$;
  // }

  handleSearch(inputValue: string = '', location: string = '', sorting: string = '', quantity = 50): void {
    this.getVideos(inputValue, location, sorting, quantity).subscribe(value => {
      // @ts-ignore
      this.rowDataArray = value.map((item: any) => ({...item, checkbox: false}));
      this.rowData$.next(this.rowDataArray);
    });
  }

  getUrl(id: any) {
    return this.youtubeUrl + id.toString()
  }

}
