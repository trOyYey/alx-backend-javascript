export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(Departments) {
      return Object.keys(Departments).length;
    },
  };
}
