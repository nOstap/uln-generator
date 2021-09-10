export class ULN {
  private generator = ULN.factory();
  private value: Array<number>;

  constructor() {
    this.value = this.generator.next().value;
  }

  private static isValid(value: Array<number>): boolean {
    const sum: number = value.reduce((acc: number, curr: number, index: number) => {
      if ((index === 9)) { return acc; }

      return acc + (value.length - index) * curr;
    }, 0);

    const rest = sum % 11;

    if (rest === 0) {
      return false;
    } else {
      return 10 - rest === value[9] ? true : false;
    }
  }

  private static *factory(): Generator<Array<number>> {
    while (true) {
      const value = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
      if (ULN.isValid(value)) {
        yield value;
      }
    }
  }

  public toString(): string {
    return this.value.join('');
  }
}
