export interface FiltersKeys {
  left_key: number;
  right_key: number;
}

export type GetOneParams = {
  id: number;
  filters_keys?: undefined;
} | {
  id?: undefined;
  filters_keys: FiltersKeys;
}

export interface IFiltersData {
  id: number;
  parent_id: number | null;
  left_key: number;
  right_key: number;
  level: number;
  name: string;
  children: IFiltersData[];
}

// DTOs

export interface CreateFilterDto {
  readonly parent_id?: number;
  readonly name: string;
}

export interface UpdateFilterDto {
  readonly id: number;
  readonly name: string;
}
