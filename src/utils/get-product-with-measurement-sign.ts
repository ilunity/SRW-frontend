import { MEASUREMENT_TYPE, MEASUREMENT_TYPE_TO_SIGN } from '@/utils/types';

export const getProductWithMeasurementSign = (measurementValue: number, measurementType: MEASUREMENT_TYPE) => {
  return measurementValue + ' ' + MEASUREMENT_TYPE_TO_SIGN[measurementType];
};
