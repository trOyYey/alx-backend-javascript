export default function getStudentIdsSum(ar) {
  if (Array.isArray(ar)) {
    return ar.reduce((sum, elemnt) => sum + elemnt.id, 0);
  }
  return 0;
}
