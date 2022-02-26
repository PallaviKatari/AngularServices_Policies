import { Injectable } from '@angular/core';
//import module policy.ts
import {Policy} from './policy'
@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  public  getPolicies() 
  {
 
    let policies:Policy[]; //array

    policies=
    [
        new Policy(1,'Term Insurance',35000),
        new Policy(2,'Term Insurance_Spouse',25000),
        new Policy(3,'Term Insurance_Child',10000),
        new Policy(4,'Term Insurance_Coronavirus',10000),
        new Policy(5,'Term Insurance_LifeInsurance',40000),
    ]

    return policies;               
}
}
