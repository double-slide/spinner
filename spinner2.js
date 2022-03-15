// draws animated spinning thingy

let spinningParts = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

for (let i = 0; i < spinningParts.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinningParts[i]}   `);
  }, 100 * i);

  if (i === spinningParts.length - 1) {
    setTimeout(() => {
      process.stdout.write(`\n`);
    }, 100 * i);
  }
}

