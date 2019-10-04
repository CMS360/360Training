const sql = require('mssql')
// {user-name}:{password}@{db-server-port}/{db-name}
const DbConnectionString ='mssql://CMS\CMSAdmin:work1234@192.168.2.105:1433/CMS2007';
sql.on('error', err => {
  console.dir(err);
  sql.close();
});
// const db = require('./connection')
/** 
 * Helper function to convert object key/value pairs to SQL syntax.
 * @param {object} ob - objColVals. 
 */
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Select all from specified table in mysql.
var orm2 = {


    sentQuery: function(mySentQuery, cb){
        console.log('ee', mySentQuery)

        new sql.ConnectionPool(DbConnectionString).connect().then(pool => {
           return pool.request()
               .query(mySentQuery);
         }).then(result => {
           sql.close();
           cb(result);
         }).catch(err => {
           console.dir(err);
           sql.close();
         });
       }
};

module.exports = orm2;