const signup = require('../Model/signupModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');


const postsignup = async(req,res)=>{
    const { firstname, lastname, email, password, gender } = req.body

    if(!firstname || !lastname || !email || !password || !gender){
        res.status(400)
        throw new Error("please add all fieds")
    }

    let cheackemail = email.includes("@gmail.com")
    if(!cheackemail){
        res.status(400)
        throw new Error ("please add the @gmail.com")
    }
    const data = await signup.create({
        firstname, 
        lastname,
        email, 
        password, 
        gender
    })
    res.status(201).json({
        status:true,
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        password:data.password,
        gender:data.gender,
        token:generateToken(data._id)

    })
}

const LoginUser =async (req,res)=>{
    const { email, password } = req.body
    const user = await signup.findById({ email, password })
    console.log(user);
    if(user && (bcrypt.compare(password, user.password))){
        res.json({
            status:true,
            _id: user.id,
            name: user.name,
            email:user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400).json({status:false, error:"invalid credentials"});    }
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    postsignup,
    LoginUser
}
