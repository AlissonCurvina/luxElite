// src/models/product-model/product-model.spec.ts

import { ProductModel } from './product-model';

describe('ProductModel', () => {
  it('should create an instance', () => {
    const product = new ProductModel(
      1, // id
      'Test Product', // name
      'Category', // category
      'Test description', // description
      ['path/to/photo.jpg'], // photos
      100, // price
      ['Package 1'], // includedInPackages
      'Brand' // brand
    );
    expect(product).toBeTruthy();
  });
});
