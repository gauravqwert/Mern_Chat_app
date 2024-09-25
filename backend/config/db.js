import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const mongoConnect = await mongoose.connect("mongodb://localhost:27017/Chat_App", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB is connected: ${mongoConnect.connection.host}`.magenta.underline
    );
  } catch (error) {
    console.log(`Error : ${error.message}`.red.bold);
    process.exit();
  }
};
export default connectDB;
