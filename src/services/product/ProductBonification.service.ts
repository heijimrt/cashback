import { BonificationValue } from '../../interfaces/BonificationValue.interface';
import { ProductBonificationTenPercent } from '../../data-providers/product/bonification/ProductBonificationTenPercent';
import { ProductBonificationFifteenPercent } from '../../data-providers/product/bonification/ProductBonificationFifteenPercent';
import { ProductBonificationTwentyPercent } from '../../data-providers/product/bonification/ProductBonificationTwentyPercent';

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
      bonification = new ProductBonificationTwentyPercent();
    }
    return bonification.calculate(value);
  }
}
