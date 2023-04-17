import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  showDetail = false;
  showReport = false;
  showCustomer = false;

  toggle(component: string) {
    // Set the visibility of the selected component to true
    // and the visibility of the other components to false
    switch (component) {
      case 'detail':
        this.showDetail = true;
        this.showReport = false;
        this.showCustomer = false;
        break;
      case 'report':
        this.showDetail = false;
        this.showReport = true;
        this.showCustomer = false;
        break;
      case 'customer':
        this.showDetail = false;
        this.showReport = false;
        this.showCustomer = true;
        break;
    }
  }
}
