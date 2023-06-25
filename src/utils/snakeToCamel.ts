interface Obj {
  [key: string]: string | number | boolean | Array<any>;
}

const toCamel = (str: string) =>
  str.replace(/([-_][a-z])/gi, ($1) => $1.toUpperCase().replace('-', '').replace('_', ''));

const isObject = (obj: Obj) => obj === Object(obj) && !Array.isArray(obj) && typeof obj !== 'function';

export const snakeToCamel = (obj: any): any => {
  if (isObject(obj)) {
    const n = {} as Obj;

    Object.keys(obj).forEach((k) => {
      n[toCamel(k)] = snakeToCamel(obj[k]);
    });

    return n;
  }

  if (Array.isArray(obj)) {
    return obj.map((i) => snakeToCamel(i));
  }

  return obj;
};
export const arraySnakeToCamel = (array: Array<Obj>) => {
  return array.map((obj) => snakeToCamel(obj));
};
