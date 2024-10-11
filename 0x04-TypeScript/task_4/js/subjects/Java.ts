namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
  export class Java extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava > 1) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher'
    }
  }
}
