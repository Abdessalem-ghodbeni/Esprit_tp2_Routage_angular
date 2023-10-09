import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MainInvoiceComponentComponent } from './Pages/main-invoice-component/main-invoice-component.component';
import { InvoiceComponentComponent } from './Pages/invoice-component/invoice-component.component';
import { InvoiceListComponentComponent } from './Pages/invoice-list-component/invoice-list-component.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"invoice_management",component:MainInvoiceComponentComponent},
{path:"invoice/:id/:active",component:InvoiceComponentComponent},
{path:"invoice_liste",component:InvoiceListComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
