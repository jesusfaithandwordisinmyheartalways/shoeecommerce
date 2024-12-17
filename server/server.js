


const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const session = require('express-session')
const mongoose = require('mongoose') // interact with mongodb database 
const MongoDBSession = require('connect-mongo') // allows to store sessions in the MongoDB database 
const bodyParser = require('body-parser')
const jsonWebToken = require('jsonwebtoken')
const helmet = require('helmet')
const http = require('http');
const fs = require('fs');



const app = express();
dotenv.config() // allows to load variables from the env file


app.use(helmet())
app.use(bodyParser.json())
app.use(cors( {
    origin: 'http://localhost:9008',
    credentials: true,
}))


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('connected to mongodb database'))
.catch((error) => console.log('failed to connected to mongodb database ', error))


const UserDataSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
})
const UserModelData = mongoose.model("shorestorecollection", UserDataSchema)



app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized:false,
    store: MongoDBSession.create({
        mongoUrl: process.env.MONGO_URL,
        collectionName: "shorestorecollection"
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 60,
        httpOnly:true,
        secure:false,
        sameSite:'strict'
    }
}))




const username_regex =  /^(?=.*[A-Z])(?=.*[\W_]).{1,10}$/;
const password_regex =  /^(?=.*[A-Z])(?=.*[\W_]).{1,10}$/;
const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



app.post('/signup', async (req, res) => {
        try {
            const { name, password, email } = req.body;
            if(!username_regex.test(name)) {return res.status(400).json({message: 'least one uppercase letter, one special character, no longer than 10 characters'})}
            if(!password_regex.test(password)) {return res.status(400).json({message: 'password must contain one uppercase letter, one special character, up to  10 characters' })}
            if(!email_regex.test(email)){return res.status(400).json({message: 'Invalid Email: Please try again'})}
        
            const IfUserExist = await UserModelData.findOne({ email })
            if(IfUserExist) {
                return res.status(400).json({message: 'Email Already Exists'})
            }
        
            const UserHashPassword = await bcrypt.hash(password, 10)
            const NEW_USER = new UserModelData({name,  email, password: UserHashPassword})
            const SAVE_NEW_USER = await NEW_USER.save()
            const JSON_WEB_TOKEN = jsonWebToken.sign({name, password, email}, process.env.SESSION_SECRET, {expiresIn: '60d'})
            const cookiesData = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000 )
                res.cookie('auth_token', JSON_WEB_TOKEN, {
                    httpOnly:true,
                    secure:false,
                    sameSite: 'Strict',
                    expires: cookiesData
                });

            res.status(200).json(SAVE_NEW_USER);

        }catch(error) {
                return res.status(500).json({error: 'server error'} )
        }
})




app.post('/login', async (req, res) => {
        try {
            const { name, password, email } = req.body;
            const UserExist = await UserModelData.findOne({ name, email })
            if(UserExist) {
                 const UserPasswordMatch = await bcrypt.compare(password, UserExist.password)
                 if(UserPasswordMatch) {
                    req.session.UserExist = {id: UserExist._id, name:UserExist.name, password: UserExist.password, email: UserExist.email }
                    res.status(200).json({message: 'Login successful', user: req.session.UserExist})
                 } else {
                    res.status(400).json({message: 'Passwords do not match'})
                 }
                } else {
                    res.status(404).json({message: 'no records in our database'})
                }  
             }catch(error) {
                    res.status(500).json({error: 'server error'})
                    console.error(`login error: ${error}`)
                 }
                
                
                })
                
                
                
                
                
                
                
                
                
                
                mongoose.connect(process.env.MONGO_URL)
                .then(() => console.log('connected to mongodb emailsubscribe database'))
                .catch((error) => console.log(`failed to connected to emailsubscribe mongodb database: ${error}`))


            const UserEmailSubscribeSchema = new mongoose.Schema({
                 email: {type: String, unique: true}
                })

                const UserEmailModel = mongoose.model('emailsubscribeletters', UserEmailSubscribeSchema)


        app.use(session({
         secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized:false,
            store:MongoDBSession.create({
            mongoUrl: process.env.MONGO_URL,
            collectionName: 'emailsubscribeletters',
          }),
        cookie: {
         maxAge: 1000 * 60 * 60 * 24 * 60,
         httpOnly:true,
         secure: false,
         sameSite: 'strict', 
    }

}))


                



                app.post('/subscribe', async (req, res) => {
                    try {
                        const { newsLetterEmail} = req.body;
                       if(!email_regex.test(newsLetterEmail)) {
                        return res.status(400).json({message: 'Invalid Email'})
                    }

                       const EmailExist = await UserEmailModel.findOne({ email: newsLetterEmail }) 
                       if(EmailExist){
                        return res.status(400).json({message: 'email already exist'})
                    }

                       const UserNewEmail = new UserEmailModel({email: newsLetterEmail}) 
                       await UserNewEmail.save()
                       
                       const EMAIL_JSON_WEB_TOKEN = jsonWebToken.sign({ email: newsLetterEmail }, process.env.SESSION_SECRET, {expiresIn: '60d'})
                       const NEWS_LETTER_COOKIE = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000 )
                       res.cookie('email_token', EMAIL_JSON_WEB_TOKEN, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === 'production',
                        sameSite: 'Strict',
                        expires: NEWS_LETTER_COOKIE
                       })
                        res.status(200).json(UserNewEmail)
                    }catch(error) {
                        res.status(500).json({error: 'server error'})
                    }

                })









                const CheckoutSchema = new mongoose.Schema({
                    userId: mongoose.Schema.Types.ObjectId,
                    items:[{
                        name: String,
                        quality: Number,
                        price: Number
                    }],
                     totalAmount: Number,
                     shippingAddress: String,
                     createAt: {type: Date, default:Date.now }
                })

                const CheckoutModel = mongoose.model("checkout", CheckoutSchema)


                app.post('/checkout', async(req, res) => {
                    try {
                        const { userId, items, shippingAddress } = req.body;
                        if(!userId || !items || items.length === 0 || !shippingAddress) {
                            return res.status(400).json({message: 'All fields are required: userId, items, shippingAddress' })
                        }
                          const totalAMount = items.reduce((acc, item) => acc + (item.price * item.quality), 0)
                          const newCheckout = new  CheckoutModel({
                             userId,
                             items,
                             totalAmount,
                             shippingAddress

                          })
                           await newCheckout.save()
                           res.status(200).json({ message: 'Checkout successful', checkoutDetails: newCheckout });
                    }catch(error) {
                        console.error('Checkout error:', error);
                        res.status(500).json({ error: 'Server error during checkout' });

                    }
                })













app.use('/', (req, res)=> {
    res.status(200).send('backend server')
})



app.listen(process.env.PORT, () => {
        console.log(`backend server: port number: ${process.env.PORT}`)
})