export class Packages {
    constructor(
        private id: number = 0,
        private name: string = '',
        private description: string = '',
        private photos: string[] = [],
        private price: number,
        private includedProducts: string[] = [],
    ) {
        this.setId(id);
        this.setName(name);
        this.setDescription(description);
        this.setPhotos(photos);
        this.setPrice(price);
        this.setIncludedProducts(includedProducts);
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    // Getter e Setter para name
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    // Getter e Setter para description
    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    // Getter e Setter para photos
    public getPhotos(): string[] {
        return this.photos;
    }

    public setPhotos(photos: string[]): void {
        this.photos = photos;
    }

    // Getter e Setter para price
    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    // Getter e Setter para includedInPackages
    public getIncludedProducts(): string[] {
        return this.includedProducts;
    }

    public setIncludedProducts(includedProducts: string[]): void {
        this.includedProducts = includedProducts;
    }
}
