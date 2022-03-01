const askQuestion = require("./pro/askQuestion");

async function main() {
  const name = await askQuestion("What's your name? ");
  const job = await askQuestion("What's your job? ");
  const age = await askQuestion("How old are you? ");

  console.log(`Hello ${name}. You are ${age} years old ${job}.`);
}

main();
