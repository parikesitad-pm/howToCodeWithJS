const readline = require("readline");
const readlineInterfaces = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterfaces.question("What is your name?", (name) => {
  readlineInterfaces.question("What is your job?", (job) => {
    readlineInterfaces.question("How old are you?", (age) => {
      console.log(
        "Hello " + name + ". You are a " + age + " year old " + job + "."
      );
      readlineInterfaces.close();
    });
  });
});
