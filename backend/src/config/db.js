import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    console.log('Connected to the database')
  } catch (error) {
    console.error('Error connecting to the database: ', error)
    process.exit(1)
  }
}
