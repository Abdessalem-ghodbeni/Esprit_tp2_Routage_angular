import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/Model/invoice';
import { InvoiceListComponentComponent } from '../invoice-list-component/invoice-list-component.component';

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent implements OnInit {
  invoice: Invoice | null = null;
  errorMessage: string | null = null;
  constructor(private route: ActivatedRoute,private invoiceListComponent: InvoiceListComponentComponent,private router:Router) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idFacture = +params['id'];
      const active = params['active'] === 'true';
      //cas de queryparams 
      // const idFacture = this.route.snapshot.queryParams['id'];
      // const active = this.route.snapshot.queryParams['active'];
 
      const invoiceFromList = this.getInvoiceById(idFacture);

      if (invoiceFromList) {
        if (invoiceFromList.active === active) {
          this.invoice = invoiceFromList;
        } else {
          this.errorMessage = 'Impossible de visualiser les détails de la facture';
        }
      } else {
        this.errorMessage = 'Facture non trouvée';
      }
    });
  }
  getInvoiceById(id: number): Invoice | null {
  

    if (this.invoiceListComponent.ListeInvoice) {
      const foundInvoice = this.invoiceListComponent.ListeInvoice.find(invoice => invoice.idFacture === id);
      return foundInvoice || null;
    }

    return null;
  }
 

}
