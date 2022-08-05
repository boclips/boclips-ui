export const DATE_FORMAT = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;

export const dateAdapter = {
  parse(v: any, createDate: (year: string, month: string, dat: string) => void) {
    const matches = v.match(DATE_FORMAT);

    if (matches) {
      return createDate(matches[3], matches[2], matches[1]);
    }

    return null;
  },
  format(date: Date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  },
};
