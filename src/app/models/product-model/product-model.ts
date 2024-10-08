export class ProductModel {
    constructor(
      public id: number,
      public name: string,
      public category: string,
      public description: string,
      public photos: string[],
      public price: number,
      public includedInPackages: string[],
      public brand: string
    ) {}
  
    //getters para acessar os valores das propriedades
    public getId(): number {
      return this.id;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getCategory(): string {
      return this.category;
    }
  
    public getDescription(): string {
      return this.description;
    }
  
    public getPhotos(): string[] {
      return this.photos;
    }
  
    public getPrice(): number {
      return this.price;
    }
  
    public getIncludedInPackages(): string[] {
      return this.includedInPackages;
    }
  
    public getBrand(): string {
      return this.brand;
    }
  }
  