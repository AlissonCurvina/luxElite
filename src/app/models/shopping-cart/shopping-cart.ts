import { ProductModel } from "../product-model/product-model";

export class ShoppingCart {
    public codigo: number = 0;
    public total: number = 0;
    public produtos: ProductModel[] = [];
}
