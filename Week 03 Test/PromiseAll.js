function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    if (promises.length === 0) {
      resolve([]);
      return;
    }
    promises.forEach((ele, idx) => {
      Promise.resolve(ele)
        .then((value) => {
          results[idx] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}
customPromiseAll([Promise.resolve(1), 2, Promise.resolve(3)])
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
