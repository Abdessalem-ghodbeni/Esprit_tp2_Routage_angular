import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';

import { MainInvoiceComponentComponent } from './Pages/main-invoice-component/main-invoice-component.component';
import { InvoiceComponentComponent } from './Pages/invoice-component/invoice-component.component';
import { InvoiceListComponentComponent } from './Pages/invoice-list-component/invoice-list-component.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
   
    MainInvoiceComponentComponent,
    InvoiceComponentComponent,
    InvoiceListComponentComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [  InvoiceListComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
