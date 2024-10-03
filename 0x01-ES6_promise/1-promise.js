export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      const messsag = 'The fake API is not working currently';
      const error = new Error(messsag);
      reject(error);
    }
  });
}
