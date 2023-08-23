const utils = require("./utils");

module.exports = function (context) {


  const confs = utils.getConfigs();

  let indexFileContent = utils.readErrorFile(context.opts.projectRoot + confs.androidPath + confs.errorFile);
  utils.indexReplacer(context.opts.projectRoot + confs.androidPath + confs.errorFile, indexFileContent);
  utils.indexJSChanger(context.opts.projectRoot + confs.androidPath + "js/index.js");

}
