import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DetailComponent } from './detail/detail.component';
import { IndexComponent } from './index/index.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'report', component: ReportComponent },
  { path: 'index', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
