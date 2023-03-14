import mongoose from 'mongoose';

const connectDB = (url) => {
  try {
    const uri = url.replace(
      /\/\/([^:]+):([^@]+)@/,
      (_, user, password) =>
        `//${user}:${encodeURIComponent(password)}@`
    );

    mongoose.set('strictQuery', true);
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('connected to mongo'))
      .catch((err) => {
        console.error('failed to connect with mongo');
        console.error(err);
      });
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
