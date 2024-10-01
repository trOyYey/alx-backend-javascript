export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.reduce((prev, now) => `${prev} | ${now}`);
}
