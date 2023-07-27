const utils = require("./utils");

module.exports = function (context) {

  const confs = utils.getConfigs();

  let errorFileContent1 = utils.readErrorFile(context.opts.projectRoot + confs.iosPath + confs.errorFile1);
  let errorFileContent2 = utils.readErrorFile(context.opts.projectRoot + confs.iosPath + confs.errorFile2);

  utils.errorFileReplacer(context.opts.projectRoot + confs.iosPath + confs.errorFile1, errorFileContent1, confs.textToReplace, '');
  utils.errorFileReplacer(context.opts.projectRoot + confs.iosPath + confs.errorFile2, errorFileContent2, confs.textToReplace, '');

}
