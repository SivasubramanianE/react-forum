module.exports= {

    create:(req,res)=>{
        db=req.app.get('mongoInstance')
        var myobj = req.body;
        console.log(myobj);
         db.collection("user").insertOne(myobj, function(err, result) {
            if (err) {
                res.send('ERROR');
              } else {
                res.send(result);
              }
      });
    },

    login:(req,res)=>{
      db=req.app.get('mongoInstance')
      let userData = req.body;
      console.log(req.body.email);
      db.collection("user").findOne({ 'email': req.body.email},function(err,result){
        if (err) {
          res.send('ERROR');
        } else {
          console.log(userData.password == result.password);
          if(!result){
            res.send("Couldn't find that email. Register or try again!");
          }else if(userData.password !== result.password){
              res.send("Password Error");
          }else{
            res.send("Login successfull");
          }
        }
      })
    },

    getUser:(req,res) =>{
      db=req.app.get('mongoInstance')
      
      db.collection("user").find({ $and:[{"role":"user"},{"isDeleted":false}] })
      .toArray(function(err,result){
        if (err) {
          res.send('ERROR');
        } else {
          console.log
          if(!result){
            res.send("No user found");
          }else{
            res.send(result);
          }
        }
      })
    }
}