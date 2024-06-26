import mongoose from 'mongoose';

let isConnected = false; //track connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('mongoDB is already connected');
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGOBD_URI,{
            dbName:'share_prompt',
        })
        isConnected = true;
        console.log('mongoBD connected');
    } catch (error) {
        console.log(error);
    }
}