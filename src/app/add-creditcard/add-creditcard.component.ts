import { CreditCard } from './../list-creditcard.service';
import { Component, OnInit } from '@angular/core';
import { ListCreditcardService } from '../list-creditcard.service';

@Component({
  selector: 'app-add-creditcard',
  templateUrl: './add-creditcard.component.html',
  styleUrls: ['./add-creditcard.component.css']
})
export class AddCreditcardComponent implements OnInit {
  card: CreditCard = new CreditCard("","","",);
  constructor(
    private listCreditcardService: ListCreditcardService
  ) { }

  ngOnInit() {
  }

  createCreditCard(): void {
    this.listCreditcardService.createCreditCard(this.card)
        .subscribe( data => {
          alert("Credit card captured successfully.");
        });

  };

}
