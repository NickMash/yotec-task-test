import { Component } from '@angular/core';

@Component({
  selector: 'app-total-count',
  templateUrl: './total-count.component.html',
  styleUrls: ['./total-count.component.css']
})
export class TotalCountComponent {
  params: any;
  count = 0;

  agInit(params: any): void {
    this.params = params;
    this.params.api.addEventListener('modelUpdated', this.updateModel.bind(this));
  }

  updateModel(): void {
    this.count = this.params.api.getDisplayedRowCount();
  }

}
