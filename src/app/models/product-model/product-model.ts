// src/models/product-model/product-model.ts

export class ProductModel {
    constructor(
        private id: number,
        private name: string,
        private category: string,
        private description: string,
        private photos: string,
        private price: number,
        private includedInPackages: string[],
        private brand: string
    ) {}

    // Métodos getters para acessar as propriedades
    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getCategory(): string {
        return this.category;
    }

    getDescription(): string {
        return this.description;
    }

    getPhotos(): string {
        return this.photos;
    }

    getPrice(): number {
        return this.price;
    }

    getIncludedInPackages(): string[] {
        return this.includedInPackages;
    }

    getBrand(): string {
        return this.brand;
    }
}
