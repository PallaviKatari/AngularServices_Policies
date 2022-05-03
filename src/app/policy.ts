//Policy Class
export class Policy 
{
    //Constructor with 3 parameters
    constructor(policyID:number,    policyname: string ,   policyrate:number) 
    {
        this.policyID=policyID;
        this.policyname=policyname;
        this.policyrate=policyrate;
    }
    //Properties
    policyID:number ;
    policyname: string ;
    policyrate:number;
}
