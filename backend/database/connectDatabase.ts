import mongoose, { ConnectOptions } from 'mongoose';

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI || '', {
      dbName: 'bookings',
    } as ConnectOptions)
    .then(({ connection }) => {
      console.log(`${connection.name} db connected at ${connection.port}`);
    })
    .catch((error: Error) => {
      console.log('Error while connecting to mongodb. Error: ' + error.message);
    });
};

export default connectDatabase;
