var orm2 = require("../config/ormClassic360.js")

var classic360 = {

    getQuery: function(query, cb){ 
        orm2.sentQuery(query,  function(result){
            cb(result)

    })
 
   }
}

module.exports = classic360;