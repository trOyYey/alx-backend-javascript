export default function getListStudentIds(ar) {
  if (Array.isArray(ar)) {
    return ar.map((elemnt) => elemnt.id);
  }
  return [];
}
