// Creating Code
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})


// Creating Database (MongoDb)
const mongoose = require('mongoose');
// conection string | conection url | mongoose url
// sql://<username>:<password>@hostname/databasename
const Database_url = "mongodb+srv://dev-farrukh:MD-12345@cluster0.zu8uxvx.mongodb.net/users";
mongoose.connect(Database_url);

// for getting notified data base is connected or notno
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})



// Database Schema

// const userSchema = new mongoose.Schema({
//     name: {
//         required: true,
//         type: String
//     },
//     year: {
//         required: true,
//         type: String
//     }
// });

// // Database Model
// const userModel =  mongoose.model('userlists', userSchema);


// //  create method request
// app.post('/',async (req,res)=>{
//     const data =   userModel(
//     {
//       name:req.body.name,
//       year:req.body.year    
//     } 
//     );
//     const dataToRead = await userModel.findOne({name:req.body.name});
//    if(dataToRead){
//    res.send("user already registered");
//    }
//    else {
//     try {
//       const dataToSave = await data.save();
//       res.status(200).json(dataToSave);
//   }
//   catch (error) {
//       res.status(400).json({message: error.message})
//   }
//    }
//   }
//   )


// //  Read method request
// app.get('/user',async (req,res)=>{
   
//     try {
//         // const dataToRead = await userModel.find({});
//         res.status(500).json(data);
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
    
//      res.send(data);
// })

// //  Delete method request

// app.delete('/user',async (req,res)=>{
   
//     try {
//         const dataToRead = await userModel.findByIdAndDelete({"_id": "64bc13da167a9fd23af4f38b"});
//         res.status(200).send("User Deleted");
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
    
//      res.send(data);
// })

// // Update method request

// app.put('/user', async (req, res) => {
//     try {
//         const dataToRead = await userModel.findOne({ "name": "zara" });

//         if (!dataToRead) {
//             return res.status(404).json({ message: "Data not found" });
//         }

//         dataToRead.name = req.body.name;
//         dataToRead.year = req.body.year;
//         await dataToRead.save();

//         res.status(200).json(dataToRead);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });


  