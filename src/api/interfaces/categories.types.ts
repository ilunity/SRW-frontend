export interface ICategory {
  id: number;
  left_key: number;
  right_key: number;
  parent_id: number | null;
  level: number;
  name: string;
  children: ICategory[];
}

// DTOs

export interface CreateCategoryDto {
  readonly parent_id?: number;
  readonly name: string;
}

export interface UpdateCategoryDto {
  readonly id: number;
  readonly name: string;
}
