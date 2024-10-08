export default function hasValuesFromArray(set, ar) {
  return ar.every((val) => set.has(val));
}
