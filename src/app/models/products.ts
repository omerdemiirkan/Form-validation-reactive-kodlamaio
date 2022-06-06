export class Product{
   id:number;
   supplierId:number;
   categoryId: number;
   quantityPerUnit:number;
   unitPrice: number;
   unitsInStock: number;
   unitsOnOrder: number;
   reorderLevel: number;
   discontinued: boolean;
   name: string;
   description:string
}