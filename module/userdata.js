var db = require('../dbconnection'); //reference of dbconnection.js file

var Task ={
    getUserDataForm:function(callback)
    {
        return db.query("select * from userdata", callback);     
    },

     getUserDataById:function(id, callback)
     {
      return db.query("select * from userdata where id=?",[id],callback);
     },
  
     addUserDataForm:function(form,callback)
      {
        return db.query("Insert into userdata (id,postMessage) values(?,?)",[    
        form.id,  
        form.postMessage
      ],callback );
      },

     deleteUserDataForm:function(id,callback)
     {
        return db.query("delete from userdata where id=?",[id],callback);
     },
     editUserDataForm:function(id,form,callback)
     {
        return db.query("update userdata set name=?, gender=?, age=?, mobileNo=?, location=? where id=?",[
          form.name,
          form.gender, 
          form.age, 
          form.mobileNo, 
          form.location, 
          id
        ],
          callback);
     },
    
    
    };


module.exports = Task;