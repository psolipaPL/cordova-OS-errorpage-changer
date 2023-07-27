const fs = require('fs');
const utils = require("./utils");

module.exports = function (context) {

  const confs = utils.getConfigs();

  let errorFileContent1 = utils.readErrorFile(confs.androidPath + confs.errorFile1);
  let errorFileContent2 = utils.readErrorFile(confs.androidPath + confs.errorFile2);

  utils.errorFileReplacer(confs.androidPath + confs.errorFile1, errorFileContent1, confs.textToReplace, '');
  utils.errorFileReplacer(confs.androidPath + confs.errorFile2, errorFileContent2, confs.textToReplace, '');

}
