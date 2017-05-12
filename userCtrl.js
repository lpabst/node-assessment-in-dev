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
                }
            }
        }else{
            results = userData.slice();
        }

        return res.status(200).json(results);
    },


    getUserById: function(req, res, next){

        return res.status(200).json(userData);        
    },


    getListOfAdmins: function(req, res, next){

        return res.status(200).json(userData);
    },


    getListOfNonAdmins: function(req, res, next){

        return res.status(200).json(userData);
    },


    getUsersByType: function(req, res, next){

        return res.status(200).json(userData);
    },


    updateUserById: function(req, res, next){

        return res.status(200).json(userData);
    },


    addUser: function(req, res, next){

        return res.status(200).json(userData);
    },


    deleteUserById: function(req, res, next){

        return res.status(200).json(userData);
    },
    

}


