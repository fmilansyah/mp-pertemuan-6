import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public num1: number;
  public num2: number;
  public num3: number;

  constructor() {}

  result() {
    if (this.num1 == null || this.num2 == null) {
      alert('Ada inputan yang kosong');
      this.num1 = null;
      this.num2 = null;
      this.num3 = null;
    } else {
      this.num3 = (this.num1 * this.num2) / 2;
    }
  }

}
