export const stringToEnum = <T extends string>(o: T[]): { [K in T]: K } => {
  return o.reduce((ac, v) => {
    ac[v] = v;
    return ac;
  }, Object.create(null));
};
