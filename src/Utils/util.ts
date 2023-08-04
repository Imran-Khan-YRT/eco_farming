// export const getArrayFromObj = (jsonObject: any) => {
//   return Object.entries(jsonObject).map(([key, value: ]) => ({ key, value }));
// };

// interface MyObject {
//   [key: string]: string | MyObject;
// }

export function getArrayFromObj(jsonObject: any): { key: any; value: any }[] {
  return Object.entries(jsonObject).map(([key, value]) => ({ key, value }));
}
