const db = require('../models')


module.exports = {
    sales360Query: function(req, res){   
        db.sales360.getQuery(req.body.query, function(result){
            res.json(result)
        })  
        
    },
    classic360Query: function(req, res){   
        db.classic360.getQuery(req.body.query, function(result){
            res.json(result)
        })  
        
    },
}