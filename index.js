#!/usr/bin/env node

const fs = require("fs");
const { lstat } = fs.promises;
const chalk = require("chalk");
const path = require("path");

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, items) => {
  if (err) {
    throw new Error(err);
  } else {
    const statPromises = items.map((item) => {
      return lstat(path.join(targetDir, item));
    });

    const allStats = await Promise.all(statPromises);

    allStats.forEach((stat, i) => {
      console.log(
        `${
          stat.isFile()
            ? chalk.blue(items[i], "(File)")
            : chalk.red.bold(items[i], "(Folder)")
        }`
      );
    });
  }
});
