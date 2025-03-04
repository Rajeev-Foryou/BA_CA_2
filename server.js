const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const port = 8080;

try {
  app.listen(port, () => {
    console.log("Port in running on 8080");
  });
} catch (error) {
  console.log("OOPS! unable to connect!", error);
}

const user = [
  { email: "alice@example.com", password: "123@ok" },
  { email: "rajeev@example.com", password: "876hlo" },
  { email: "knock@example.com", password: "987kho" },
];

app.put("/signup", (req, res) => {
  const knot = new user({ email, password }) = req.body;
  
  if(knot.email==user.email){
    return res.send.password;
  }
  if(knot.email!=user.email){
    return res.status(400).send("Email not found");
  }
}); 

app.delete("/user"/"email" ,async (req , res) => {
    try{
        const id = req.params.email;
        const delete_user = await user.findByIdAndDelete(id)
        if(!delete_user){
            res.status(404).json("email not found");
        }
        res.status(200).json("user has been deleted");
    }catch(error){
        return res.status(400).send("oops!");
    }
    
})
