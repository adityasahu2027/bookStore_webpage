const User = require('../model/user');
const bcryptjs = require('bcryptjs');

const signup =async (req,res)=>{
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if(user){
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash the password before saving
        const hashedPassword = await bcryptjs.hash(password, 10);
        // created a new user in User model
        // and save it to the database
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password:hashedPassword
        });
         await createdUser.save();
        res.status(201).json({ message: "User created successfully" ,user:{
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email,
        }});
    }
         catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


// login controller 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const user = await User.findOne({ email });
        // Compare the password with the hashed password in the database
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }else{
            // If login is successful, return user details
            res.status(200).json({ message: "Login successful", user:{
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            } });
        }

    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { signup, login };