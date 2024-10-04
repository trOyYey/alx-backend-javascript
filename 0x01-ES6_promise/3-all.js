import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((answers) => {
      console.log(`${answers[0].body} ${answers[1].firstName} ${answers[1].lastName}`);
    }, () => {
      console.log('Signup system offline');
    });
}
