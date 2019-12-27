const clone = require("./clone");

const init = async name => {
  console.log("create project " + name);
  try {
    const remote = "github:l-x-f/react-use-svg-demo";
    await clone(remote, name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = init;
