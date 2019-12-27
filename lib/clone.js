const { promisify } = require("util");
const ora = require("ora");
const download = promisify(require("download-git-repo"));

const clone = async function(repo, dir, opotions = {}) {
  const process = ora(`下载.....${repo}`);
  process.start();
  try {
    await download(repo, dir, opotions);
  } catch (error) {
    console.log(error);
  }
  process.succeed();
};

module.exports = clone;
