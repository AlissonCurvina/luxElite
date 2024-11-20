import { ProductModel } from "../product-model/product-model";

export class PackageModel {
    constructor(
        private id: Number,
        private products: ProductModel[],
        private name: String,
        private description: String,
        private price: Number
    ) {}

    public setId(id: Number) {
        this.id = id;
    }

    public getId(): Number {
        return this.id;
    }

    public setProducts(products: ProductModel[]) {
        this.products = products;
    }

    public getProducts(): ProductModel[] {
        return this.products;
    }

    public setName(name: String) {
        this.name = name;
    }

    public getName(): String {
        return this.name;
    }

    public setDescription(description: String) {
        this.description = description;
    }

    public getDescription(): String {
        return this.description;
    }

    public setPrice(price: Number) {
        this.price = price;
    }

    public getPrice(): Number {
        return this.price;
    }
}
