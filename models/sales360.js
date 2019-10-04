var orm = require("../config/ormSales360.js")

var sales360 = {

    getQuery: function(query, cb){ 
        orm.sentQuery(query,  function(result){
            cb(result)

    })
 
   }
}

module.exports = sales360;