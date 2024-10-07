import { ProductModel } from "./product-model";

describe('ProductModel', () => {
  it('should create an instance with valid parameters', () => {
    const product = new ProductModel(
      1, // id
      'Chanel Black', // name
      'Bolsas', // category
      'Bolsa Chanel preta básica.', // description
      ['assets/chanel_black.jpg'], // photos
      400, // price
      ['Básico'], // includedInPackages
      'Chanel' // brand
    );
    expect(product).toBeTruthy();
    expect(product.getId()).toBe(1);
    expect(product.getName()).toBe('Chanel Black');
    expect(product.getCategory()).toBe('Bolsas');
    expect(product.getDescription()).toBe('Bolsa Chanel preta básica.');
    expect(product.getPhotos()).toEqual(['assets/chanel_black.jpg']);
    expect(product.getPrice()).toBe(400);
    expect(product.getIncludedInPackages()).toEqual(['Básico']);
    expect(product.getBrand()).toBe('Chanel');
  });
});
 */