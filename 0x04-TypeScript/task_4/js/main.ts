/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />


export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    firstName: 'Ajwad',
    lastName: 'Elgandouz',
    experienceTeachingC: 10,
};

console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getRequirements());

console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getRequirements());

console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getRequirements());
