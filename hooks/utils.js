const fs = require('fs');

//Initial configs
const configs = {
    textToReplace: 'There was an error processing your request.',
    androidPath: "/platforms/android/app/src/main/assets/www/",
    iosPath: "/platforms/ios/www/",
    errorFile: 'index.html'
};

function getConfigs() {
    return configs;
}

function readErrorFile(path) {
    return fs.readFileSync(path, "utf-8");
}

function errorFileReplacer(path, content, textToReplace, replacementText) {
    content = content.replace(textToReplace, replacementText);
    fs.writeFileSync(path, content, "utf-8");
}

function indexReplacer(path, content) {
    //content = content.substr(0, content.indexOf('<script type="text/javascript" src="scripts/Debugger.js')) + content.substr(content.indexOf('</script>', content.indexOf('<script type="text/javascript" src="scripts/Debugger.js')) + 9)
    content = content.replace("/<script/g", "<script async");
    fs.writeFileSync(path, content, "utf-8");
}

module.exports = {
    getConfigs,
    readErrorFile,
    errorFileReplacer,
    indexReplacer
}