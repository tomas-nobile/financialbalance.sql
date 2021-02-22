import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


function createToken(user, SECRET_KEY, expiresIn){
    const {id,name,email,username}= user;
    const payload= {
      id,
      name,
      email,
      username
    }
    return jwt.sign(payload, SECRET_KEY, {expiresIn})
  }

async function createUser(input, {User}){ 
    const newUser=input
    
    const {username, password, email}= newUser;
    
    const salt= await bcrypt.genSaltSync(10);
    newUser.password= await bcrypt.hash(password,salt)

    return User.create(newUser)
}

async function login (input, {User}){

    
    
    
    
    const userFound= await User.findOne({where:{username: input.username}})
    console.log("info " +userFound);
    if(!userFound) throw new Error("Error en el username");
  
    const passwordSucess= await bcrypt.compare(input.password, userFound.password);
    if(!passwordSucess) throw new Error("Error en contraseña");
  
    return {
      token:createToken(userFound,process.env.SECRET_KEY,"365d")
      
    }
  }

module.exports={
    createUser,
    login
}