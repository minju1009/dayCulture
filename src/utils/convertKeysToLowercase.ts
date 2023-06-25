export default function convertKeysToLowercase<T>(objArray: T[]): T[] {
  return objArray.map((obj) => {
    const newObj: any = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key.toLowerCase()] = obj[key];
      }
    }
    return newObj as T;
  });
}
