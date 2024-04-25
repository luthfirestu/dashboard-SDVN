import mongoose from 'mongoose';

async function connectDB() {
    try {
        const options: any = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        // Koreksi URI MongoDB, pastikan database yang digunakan adalah 'dashboard-sdvn'
        await mongoose.connect('mongodb://localhost:27017/dashboard-sdvn', options);

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

export default connectDB;
