import { BonificationValue } from '../../../interfaces/BonificationValue.interface';
import { BonificationPercentHelper } from '../../../helpers/BonificationPercent.helper';

export class ProductBonificationTenPercent implements BonificationValue {

  public calculate(value: number): number {
    return BonificationPercentHelper.percentage(value, 10);
  }
}
