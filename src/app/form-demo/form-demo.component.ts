import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {
  paymentHandler: any = null;
  constructor() {}
  
  //makePayment(amount: any) {
    makePayment() {
   const paymentHandler = (<any>window).StripeCheckout.configure({
     key: 'test_6oE5mm0g0eu34kodQS',
     locale: 'auto',
     token: function (stripeToken: any) {
       console.log(stripeToken);
       alert('Stripe token generated!');
     },
   });
   paymentHandler.open({
     name: 'DELL',
     description: 'LAPTOP',
     //amount: amount ,
   });
 }
 
 invokeStripe() {
   if (!window.document.getElementById('stripe-script')) {
     const script = window.document.createElement('script');
     script.id = 'stripe-script';
     script.type = 'text/javascript';
     script.src = 'https://checkout.stripe.com/checkout.js';
     script.onload = () => {
       this.paymentHandler = (<any>window).StripeCheckout.configure({
         key: 'test_6oE5mm0g0eu34kodQS',
         locale: 'auto',
         token: function (stripeToken: any) {
           console.log(stripeToken);
           alert('Payment has been successfull!');
         },
       });
     };
     window.document.body.appendChild(script);
   }
 }
  productTypes = ['Laptop', 'Mobile','Television','HeadPhone'];
  myForm: FormGroup | any;
  title: FormControl | any;
  modelName: FormControl | any;
  color: FormControl | any;
  productType: FormControl | any;
  brand: FormControl | any;
  price: FormControl | any;
  ngOnInit() {
    this.invokeStripe();
    this.title = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.modelName = new FormControl();
    this.color = new FormControl('', Validators.pattern('[a-zA-Z]*'));
    this.productType = new FormControl('', Validators.required);
    this.brand = new FormControl('', Validators.required);
    this.price = new FormControl('', [Validators.required, Validators.min(1)]);
    this.myForm = new FormGroup({
      'title': this.title,
      'modelName': this.modelName,
      'productType': this.productType,
      'color': this.color,
      'brand': this.brand,
      'price': this.price
    });
  }
}