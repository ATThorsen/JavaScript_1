
const OpgavetB = require("./execises1");

function callModule() {
    OpgavetB([48, 40, 32, 24, 16, 8]).then((result) =>
      console.log(result)
    );
  }

callModule()