const fs = require('fs');


module.exports = function (context) {
  
  //Initial configs
  const configs = {
    textToReplace: 'There was an error processing your request.',
    androidPath: context.opts.projectRoot + "/platforms/android/app/src/main/assets/www/",
    iosPath: context.opts.projectRoot + "/platforms/ios/www/",
    errorFile1: '_error.html',
    errorFile2: 'error.html'
  };

  var platform = context.opts.plugin.platform;

  //Assigns the error screen paths according to the platform
  const errorScreenPath = platform === 'android' ? configs.androidPath + configs.errorFile1 : configs.iosPath + configs.errorFile1;
  const errorScreenPath2 = platform === 'android' ? configs.androidPath + configs.errorFile2 : configs.iosPath + configs.errorFile2;
  

  let errorContent1 = fs.readFileSync(errorScreenPath, "utf-8");  
  let errorContent2 = fs.readFileSync(errorScreenPath2, "utf-8");  

  //Replaces the desired content
  errorContent1 = errorContent1.replace(configs.textToReplace, '');
  errorContent2 = errorContent2.replace(configs.textToReplace, '');  

  //Rewrites the error files
  fs.writeFileSync(errorScreenPath, errorContent1, "utf-8"); 
  fs.writeFileSync(errorScreenPath2, errorContent2, "utf-8");
}
