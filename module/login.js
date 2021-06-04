var db = require('../dbconnection'); //reference of dbconnection.js file

var Task ={
    getUserForm:function(callback)
    {
        return db.query("select * from register", callback);     
    },

     getUserFormById:function(id, callback)
     {
      return db.query("select * from register where authToken=?",[id],callback);
     },
  
     addUserForm:function(form,callback)
      {
          console.log(form);
        return db.query("Insert into register(id,email,name,photoUrl,authToken,idToken,provider) values(?,?,?,?,?,?,?)",[    
          form.id,
          form.email,
          form.name, 
          form.photoUrl,
          form.authToken, 
          form.idToken,
          form.provider
      ],callback );
      },

     deleteUserForm:function(id,callback)
     {
        return db.query("delete from register where id=?",[id],callback);
     },
    //  editUserForm:function(id,form,callback)
    //  {
    //     return db.query("update register set name=?, gender=?, age=?, mobileNo=?, location=? where id=?",[
    //       form.name,
    //       form.gender, 
    //       form.age, 
    //       form.mobileNo, 
    //       form.location, 
    //       id
    //     ],
    //       callback);
    //  },
    
    
    };


module.exports = Task;