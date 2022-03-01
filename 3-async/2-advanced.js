const readline = require("readline");
const readlineInterfaces = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const name = await askQuestion(readlineInterfaces, "What's your name? ");
  const job = await askQuestion(readlineInterfaces, "What's your job? ");
  const age = await askQuestion(readlineInterfaces, "How old are you? ");

  console.log(`Hello ${name}. You are a ${age} year old ${job}.`);
  readlineInterfaces.close();
}
main();

function askQuestion(readlineINterfaces, question) {
  return new Promise((resolve) => {
    readlineINterfaces.question(question, (asnwer) => {
      resolve(asnwer);
    });
  });
}
