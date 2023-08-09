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
  left_key: number;
  right_key: number;
  level: number;
  name: string;
  children: IFiltersData[];
}
