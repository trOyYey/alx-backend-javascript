function makeArray(id, firstName, location) {
  return { id, firstName, location };
}

export default function getListStudents() {
  return [
    makeArray(1, 'Guillaume', 'San Francisco'),
    makeArray(2, 'James', 'Columbia'),
    makeArray(5, 'Serena', 'San Francisco'),
  ];
}
