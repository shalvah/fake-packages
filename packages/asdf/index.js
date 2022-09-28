let info = () => {
    const { version, name } = require('./package.json');
    return { version, name, path: __dirname };
}
module.exports = info;
