import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ChartModule} from 'primeng/chart';
import { OrderComponent } from './order/order.component';
import { ReportComponent } from './report/report.component';



const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
        {
            path : 'report',
            component : ReportComponent
        }
    ]
  } 
];

@NgModule({
 declarations:[OrderComponent, ReportComponent],
  imports: [RouterModule.forChild(routes),ChartModule],
  exports: [RouterModule] 
})
export class OrdersModule{}