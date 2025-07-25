import mongoose from "mongoose";

export const  connectDB = async () =>{
await mongoose.connect('{mongodb+srv://vijaysathvik05:blOOT1lc0QUfH67H@cluster0.act5sxe.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.