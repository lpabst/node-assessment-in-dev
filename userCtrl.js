const userData = require('./userData.json');

module.exports = {

    getUsers: function(req, res, next){
        let q = req.query;
        var results = [];
        if(q.favorites){
            for (var i in userData){
                for (var j in userData[i].favorites){
                    if (userData[i].favorites[j] == q.favorites){
                        results.push(userData[i]);
                    }
                }
            }
        }else if(q.age){
            for (var i in userData){
                if (userData[i].age < q.age){
                    results.push(userData[i]);
                }
            }
        }else if(q.lastname){
            for (var i in userData){
                if (userData[i].last_name == q.lastname){
                    results.push(userData[i]);
                }
            }
        }else if(q.email){
            for (var i in userData){
                if (userData[i].email == q.email){
                    results.push(userData[i]);
                    return res.status(200).send(results[0]);
                }
            }
        }else{
            results = userData.slice();
        }

        return res.status(200).send(results);
    },


    getUserById: function(req, res, next){
        let id = req.params.id;
        for (var i in userData){
            if (userData[i].id == id){
                return res.status(200).json(userData[i]); 
             }
        }
        
        return res.status(404).json(null); 
    },


    getListOfAdmins: function(req, res, next){
        let results = [];
        for (var i in userData){
            if (userData[i].type == 'admin'){
                results.push(userData[i]);
            }
        }
        return res.status(200).json(results);
    },


    getListOfNonAdmins: function(req, res, next){
        let results = [];
        for (var i in userData){
            if (userData[i].type != 'admin'){
                results.push(userData[i]);
            }
        }
        return res.status(200).json(results);
    },


    getUsersByType: function(req, res, next){
        let type = req.params.type;
        let results = [];
        for (var i in userData){
            if (userData[i].type == type){
                results.push(userData[i]);
            }
        }
        return res.status(200).json(results);
    },


    updateUserById: function(req, res, next){
        let id = req.params.id;
        for (var i in userData){
            if (userData[i].id == id){
                userData[i] = req.body;
            }
        }
        return res.status(200).json(userData);
    },


    addUser: function(req, res, next){
        let id = userData.length + 1;
        req.body.id = id;
        userData.push(req.body);
        return res.status(200).json(userData);
    },


    deleteUserById: function(req, res, next){
        let id = req.params.id;
        for (var i in userData){
            if (userData[i].id == id){
                userData.splice(i, 1);
                return res.status(200).json(userData);
            }
        }
        
    },


}


