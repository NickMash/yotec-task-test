import { Component, Input, OnChanges } from '@angular/core';
import { YoutubeSearchService } from '../services/youtube-search.service';
import { TableRendererService } from '../services/table-renderer.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnChanges{

  @Input() rowData$: any;
  @Input() statusBar: any;
  @Input() frameworkComponents: any;
  @Input() checkBoxStyle: any;
  @Input() isAllResults: any;
  @Input() showHeaderCheckbox: any;

  columnDefs: any;

  constructor(public youtubeSearchService: YoutubeSearchService, public tableRendererService: TableRendererService) { }

  ngOnChanges() {
    this.columnDefs = this.tableRendererService.columnDefs(this.isAllResults, this.checkBoxStyle, this.showHeaderCheckbox);
  }

  gridOptions: any = {
    getContextMenuItems: (params: any) => this.getContextMenuItems(params),
  }

  getContextMenuItems(params: any) {
    const url = this.youtubeSearchService.getUrl(params.node.data.videoId);
    if (params.column.colId === 'thumbnails') {
      return [
        'copy',
        'copyWithHeaders',
        'separator',
        {
          icon: `<span class="ag-icon ag-icon-linked"></span>`,
          name: 'Open in new tab',
          action: () => {
            window.open(url, '_blank');
          }
        }
      ];
    } else {
      return ['copy', 'copyWithHeaders', 'separator', 'export'];
    }
  }

}
