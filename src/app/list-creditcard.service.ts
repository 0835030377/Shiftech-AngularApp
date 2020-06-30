import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class CreditCard{
  constructor(
    public cardNumber:string,
    public type:string,
    public bankName:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class ListCreditcardService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getCreditcards()
  {
    console.log("test call");
    return this.httpClient.get<CreditCard[]>('http://localhost:8080/creditcards/getAllcreditcards');

  }

  public deleteCreditCard(creditcard) {
    return this.httpClient.delete<CreditCard>("http://localhost:8080/employees" + "/"+ creditcard);
  }

  public createCreditCard(creditcard) {
    return this.httpClient.post<CreditCard>("http://localhost:8080/creditcards", creditcard);
  }
}
