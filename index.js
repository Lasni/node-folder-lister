#!/usr/bin/env node

const fs = require("fs");

fs.readdir(process.cwd(), (err, files) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(files);
  }
});
