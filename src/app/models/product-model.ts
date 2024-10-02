export class ProductModel {

    constructor(
        private id: number,
        private name: string = '',
        private category: string = '',
        private description: string = '',
        private photos: string[] = [],
        private price: number,
        private includedInPackages: string[] = [],
        private brand: string = ''
    ) {
        this.setId(id);
        this.setName(name);
        this.setCategory(category);
        this.setDescription(description);
        this.setPhotos(photos);
        this.setPrice(price);
        this.setIncludedInPackages(includedInPackages);
        this.setBrand(brand);
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

    // Getter e Setter para category
    public getCategory(): string {
        return this.category;
    }

    public setCategory(category: string): void {
        this.category = category;
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
    public getIncludedInPackages(): string[] {
        return this.includedInPackages;
    }

    public setIncludedInPackages(includedInPackages: string[]): void {
        this.includedInPackages = includedInPackages;
    }

    // Getter e Setter para brand
    public getBrand(): string {
        return this.brand;
    }

    public setBrand(brand: string): void {
        this.brand = brand;
    }
}
