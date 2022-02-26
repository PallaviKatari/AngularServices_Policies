2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
 
import {Product} from './product'
 
export class ProductService{
 
    public  getProducts() {
 
        let products:Product[];
 
        products=[
            new Product(1,'Term Insurance',35000),
            new Product(2,'Term Insurance_Spouse',25000),
            new Product(3,'Term Insurance_Child',10000)
        ]
 
        return products;               
    }
}
 