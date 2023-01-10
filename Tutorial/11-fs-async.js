const {readFile, writeFile} = require("fs");

console.log('start')

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;
    writeFile("./content/result-async.text", `Here is ${first}, and ${second}`, (err, result) => {
      if (err) {
        console.log(err);
        return null;
      }
      console.log('done with this task')
    });
  });
});

console.log('starting next task')
