export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any,
};

export interface Directors extends Teacher {
  numberOfReports: number;
};

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};

export interface StudentClassInerFace {
  displayName(): string
  workOnHomework(): string
}

export interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInerFace;
}


export class StudentClass implements StudentClassInerFace, StudentClassInerFace {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  };

  displayName(): string {
    return this.firstName;
  };

  workOnHomework(): string {
    return 'Currently working';
  };

}


const student: StudentClass = new StudentClass('Ali', 'Gandooz');

console.log(student.lastName);
console.log(student.firstName);
console.log(student.displayName());
console.log(student.workOnHomework());
