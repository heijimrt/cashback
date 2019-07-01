import { BonificationValue } from '../../../interfaces/bonification-value.interface';
import { BonificationPercentHelper } from '../../../helpers/bonification-percent.helper';

export class ProductBonificationTwentyPercent implements BonificationValue {
  public calculate(value: number) {
    return BonificationPercentHelper.percentage(value, 20);
  }
}