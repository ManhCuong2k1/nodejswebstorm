var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd +
         '@cluster0.oqkoz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    },
}