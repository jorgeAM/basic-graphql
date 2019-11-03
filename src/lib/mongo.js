import mongoose from 'mongoose'

const { MONGO_URI } = process.env

export const connectToMongo = async () => {
  return mongoose.connect(MONGO_URI, {
    bufferCommands: false,
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

