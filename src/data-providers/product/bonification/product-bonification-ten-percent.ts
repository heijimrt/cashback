import { BonificationValue } from '../../../interfaces/bonification-value.interface';
import { BonificationPercentHelper } from '../../../helpers/bonification-percent.helper';

export class ProductBonificationTenPercent implements BonificationValue {

  public calculate(value: number): number {
    return BonificationPercentHelper.percentage(value, 10);
  }
}
