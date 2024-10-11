namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class React extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact > 1) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher'
    }
  }
}
