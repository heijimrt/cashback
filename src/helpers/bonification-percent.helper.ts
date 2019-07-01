export class BonificationPercentHelper {
  public static percentage(
    value: number,
    percent: number
  ) {
    return (value/100) * percent;
  }
}