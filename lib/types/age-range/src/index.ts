export const isEqualTo = (a: AgeRange, b: AgeRange) => {
  if (a == null || b == null) {
    return false;
  }

  return a.resolveMin() === b.resolveMin() && a.resolveMax() === b.resolveMax();
};

class AgeRange {
  private readonly min?: number;

  private readonly max?: number;

  private static AGE_RANGE_MIN = 3;

  private static AGE_RANGE_MAX = 19;

  public constructor(min?: number, max?: number) {
    this.min = min;
    this.max = max;
  }

  public static fromJson(json: string): AgeRange {
    const decoded = JSON.parse(json);
    return new AgeRange(decoded.min, decoded.max);
  }

  public static removeDuplicates(ageRanges: AgeRange[]): AgeRange[] {
    const deduplicated: AgeRange[] = [];
    ageRanges.forEach((it) => {
      if (!deduplicated.find((range) => isEqualTo(it, range))) {
        deduplicated.push(it);
      }
    });
    return deduplicated;
  }

  public getId() {
    const max = this.max == null ? 99 : this.max;
    return `${this.resolveMin()}-${max}`;
  }

  public getLabel() {
    const max = this.max == null ? 19 : this.max;

    if (max === 19) {
      return `${this.resolveMin()}+`;
    }
    return `${this.resolveMin()} - ${this.max}`;
  }

  public getShortLabel(): string {
    const max = this.max == null ? 19 : this.max;

    if (max === 19 || max === 99) {
      return `${this.resolveMin()}+`;
    }
    return `${this.resolveMin()}-${this.max}`;
  }

  public getNumbers(): number[] {
    const max = !this.max ? AgeRange.AGE_RANGE_MAX : this.max;

    const arr: number[] = [];
    for (let i = this.min || AgeRange.AGE_RANGE_MIN; i <= max; i += 1) {
      arr.push(i);
    }

    return arr;
  }

  public resolveMin() {
    if (this.min && this.min > 2) {
      return this.min;
    }
    return AgeRange.AGE_RANGE_MIN;
  }

  public resolveMax() {
    if (this.max) {
      return this.max;
    }
    return AgeRange.AGE_RANGE_MAX;
  }

  public isBounded() {
    return this.min !== null;
  }

  public encodeJSON(): string {
    return JSON.stringify(
      this.resolveMin() === AgeRange.AGE_RANGE_MAX
        ? {
            min: this.resolveMin(),
          }
        : {
            min: this.resolveMin(),
            max: this.resolveMax(),
          }
    );
  }
}

export default AgeRange;
