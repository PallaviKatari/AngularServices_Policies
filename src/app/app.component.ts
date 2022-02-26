import { Component } from '@angular/core';
 //import PolicyService and Policy class
import { PolicyService } from './policy.service';
import { Policy } from './policy';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
 
export class AppComponent
{
 
   policies : Policy[] | undefined; //array
   policyService; //variable
 
   constructor()
   {
     //creating an instance for the PolicyService class to access getPolicies()
     this.policyService=new PolicyService();
   }
   //creating a function in app.component to access the getPolicies() from PolicyService
   getPolicies()
  {
     //accessing the getpolicies() method from policyService class
     //and store it in the array policies
     this.policies=this.policyService.getPolicies();
   }
    //ngStyle
  color: string = 'red';
  
}
