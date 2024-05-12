const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt=require("jsonwebtoken")

let refreshTokens=[]
const generateTokens=[]

const tokensecret="ibtissem"
const Rtokensecret="ibtissem15"
const generateToken=(user)=>{
    return jwt.sign({id:user.id},tokensecret,{expiresIn:"30m"})
};

const generaterefreshtoken=(user)=>{
    return jwt.sign({id:user.id},Rtokensecret,{expiresIn:"30m"})
};

module.exports = {
    login: async (req, res) => {
        const { mail, Phone_Number, password } = req.body;
        let user;

        // Vérifier si l'utilisateur existe avec l'adresse e-mail
        if (mail) {
            user = await userModel.findOne({ mail });
        }

        // Si l'utilisateur n'est pas trouvé par e-mail, vérifier avec le numéro de téléphone
        if (!user && Phone_Number) {
            user = await userModel.findOne({ Phone_Number });
        }

        if (!user) {
            // Si l'utilisateur n'existe pas
            res.status(400).json({
                success: false,
                message: "Invalid email address or phone number",
            });
        } else {
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                // Si le mot de passe n'est pas valide
                res.status(400).json({
                    success: false,
                    message: "Invalid password",
                });
            } else {
                // Si les informations d'identification sont valides, générer les jetons d'accès
                const AccessToken = generateToken(user);
                const AccessRefreshToken = generaterefreshtoken(user);
                refreshTokens.push(AccessRefreshToken);

                res.status(201).json({
                    success: true,
                    message: "Login successful",
                    data: user,
                    token: AccessToken,
                    refreshToken: AccessRefreshToken,
                });
            }
        }
    }
};
