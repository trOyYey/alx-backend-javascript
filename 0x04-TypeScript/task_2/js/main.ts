export interface DirectorInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workDirectorTasks(): string
}

export interface TeacherInterface {
  workFromHome(): string
  getCoffeeBreak(): string
  workTeacherTasks(): string
}

export class Director implements DirectorInterface {

  workFromHome(): string {
    return 'Working from home';
  };

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  };

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  };
}

export class Teacher implements TeacherInterface {

  workFromHome(): string {
    return 'Cannot work from home';
  };

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  };

  workTeacherTasks(): string {
    return 'Getting to work';
  };
}

export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector(employee: Teacher | Director): boolean {
  return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director) {
  if (employee instanceof Director) console.log(employee.workDirectorTasks());
  else console.log(employee.workTeacherTasks());

}


export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass == "Math") return 'Teaching Math';
  else return 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
