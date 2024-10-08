export default function getStudentsByLocation(ar, city) {
  if (Array.isArray(ar)) {
    return ar.filter((elemnt) => elemnt.location === city);
  }
  return [];
}
