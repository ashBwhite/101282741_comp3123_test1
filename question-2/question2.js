const resolvedPromise = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {resolve({'message':'Resolved Promise!'});}, 500);
  });
}

const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {reject({'error': 'Rejected Promise!'});}, 500);
  });
}

resolvedPromise().then(resolved => console.log(resolved))
rejectedPromise().catch(error => console.log(error))