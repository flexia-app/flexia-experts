export const mapLabel = (list: { value: string; label: string }[]) => {
  const dict = Object.fromEntries(list.map(i => [i.value, i.label]));
  return (val: string) => dict[val] || val;
};
