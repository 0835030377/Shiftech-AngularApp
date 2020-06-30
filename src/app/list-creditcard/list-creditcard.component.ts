import { ListCreditcardService, CreditCard } from './../list-creditcard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-creditcard',
  templateUrl: './list-creditcard.component.html',
  styleUrls: ['./list-creditcard.component.css']
})
export class ListCreditcardComponent implements OnInit {
  creditcards:string[];

  constructor(private listCreditcardService: ListCreditcardService) { }

  ngOnInit(){
    this.listCreditcardService.getCreditcards().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response)
{
    this.creditcards=response;
}

deleteEmployee(creditcard: CreditCard): void {
  this.listCreditcardService.deleteCreditCard(creditcard)
    .subscribe( data => {
      this.creditcards = this.creditcards.filter(u => u !== creditcard.cardNumber);
    })
};

}
