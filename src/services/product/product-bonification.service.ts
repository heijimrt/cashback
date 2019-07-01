import { BonificationValue } from '../../interfaces/bonification-value.interface';
import { ProductBonificationTenPercent } from '../../data-providers/product/bonification/product-bonification-ten-percent';
import { ProductBonificationFifteenPercent } from '../../data-providers/product/bonification/product-bonification-fifteen-percent';

export class ProductBonificationService {

  /**
   * Return calculated value to cashback
   *
   * @param value {Number}
   */
  public getBonification(value: number): number | void {

    let bonification: BonificationValue;

    if (value < 0) return;

    if (value < 1000) {
      bonification = new ProductBonificationTenPercent();
    } else if (value > 1000 && value < 1500) {
      bonification = new ProductBonificationFifteenPercent();
    } else {
      bonification = new ProductBonificationFifteenPercent();
    }
    return bonification.calculate(value);
  }
}
