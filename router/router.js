
const express = require("express");
const router = express.Router();
const loginCopy = require("../model/Signup");

router.post("/login", (request, response) => {
  const form_data = new loginCopy({
    name:request.body.name,
    email: request.body.email,
    contact:request.body.contact,
    address:request.body.address,
    gender: request.body.gender
  });
  
  form_data.save().then((data) => {
      response.json(data);
      console.log("Data added successfully");
    })
    .catch((error) => {
      response.json(error);
    });
});



router.delete("/delete/:id" ,async(request,res)=>{
  const A1 = new loginCopy({
    name:request.body.name,
    email: request.body.email,
    contact:request.body.contact,
    address:request.body.address,
    gender: request.body.gender
  });
  

          
  const kutty=await A1.findByIdAndDelete(request.params.id);
   res.json(kutty);

   console.log("Recorde deleted")
})




module.exports = router;
