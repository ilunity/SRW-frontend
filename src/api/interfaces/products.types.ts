export interface IProductData {
  id: number;
  name: string;
  img: string;
}

// DTOs

export interface CreateProductDto {
  readonly name: string;
  readonly img: string;
}

export type UpdateProductDto = Partial<CreateProductDto> & {
  readonly id: number;
}
