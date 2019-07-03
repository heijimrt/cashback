import { BonificationValue } from '../../../interfaces/BonificationValue.interface';
import { BonificationPercentHelper } from '../../../helpers/BonificationPercent.helper';

export class ProductBonificationTwentyPercent implements BonificationValue {
  public calculate(value: number) {
    return BonificationPercentHelper.percentage(value, 20);
  }
}