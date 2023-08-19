export function getArrayFromObj(jsonObject: any): { key: any; value: any }[] {
  return Object.entries(jsonObject).map(([key, value]) => ({ key, value }));
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
