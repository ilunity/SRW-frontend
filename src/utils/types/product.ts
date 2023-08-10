export enum MEASUREMENT_TYPE {
  WEIGHT = 'WEIGHT',
  VOLUME = 'VOLUME',
  PINCH = 'PINCH',
  PIECE = 'PIECE',
  TABLESPOON = 'TABLESPOON',
  TEASPOON = 'TEASPOON',
}

export const MEASUREMENT_TYPE_TO_TEXT: Record<MEASUREMENT_TYPE, string> = {
  [MEASUREMENT_TYPE.WEIGHT]: 'Вес',
  [MEASUREMENT_TYPE.VOLUME]: 'Объем',
  [MEASUREMENT_TYPE.PINCH]: 'Щепотка',
  [MEASUREMENT_TYPE.PIECE]: 'Штука',
  [MEASUREMENT_TYPE.TABLESPOON]: 'Столовая ложка',
  [MEASUREMENT_TYPE.TEASPOON]: 'Чайна ложка',
};

export const MEASUREMENT_TYPE_TO_SIGN: Record<MEASUREMENT_TYPE, string> = {
  [MEASUREMENT_TYPE.WEIGHT]: 'гр.',
  [MEASUREMENT_TYPE.VOLUME]: 'мл.',
  [MEASUREMENT_TYPE.PINCH]: 'щеп.',
  [MEASUREMENT_TYPE.PIECE]: 'шт.',
  [MEASUREMENT_TYPE.TABLESPOON]: 'ст.л.',
  [MEASUREMENT_TYPE.TEASPOON]: 'ч.л.',
};

export interface IProduct {
  id: number;
  measurement_type: MEASUREMENT_TYPE;
  measurement_value: number;
  product: {
    id: number;
    name: string;
    img: string;
  };
}
