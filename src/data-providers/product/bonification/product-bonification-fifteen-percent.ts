import { BonificationValue } from '../../../interfaces/bonification-value.interface';
import { BonificationPercentHelper } from '../../../helpers/bonification-percent.helper';

export class ProductBonificationFifteenPercent implements BonificationValue {
  public calculate(value: number) {
    return BonificationPercentHelper.percentage(value, 15)
  }
}