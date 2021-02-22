

export default (sequelize,{ BOOLEAN,STRING,UUID,UUIDV1})=>{
const User = sequelize.define('User',{
    id:{
        primaryKey:true,
        allowNull:false,
        type:UUID,
        defaultValue:UUIDV1()
    },
    username:{
        type:STRING,
        allowNull:false,
        unique:true,
        validate:{
            isAlphanumeric:{
                args:true,
                msg:'The user just accepts alphanumeric characters'
            },
            len:{
                args:[4,20],
                msg:'The username must be from 4 to 20 characters'
            }
        }
    },
    password:{
        type:STRING,
        allowNull:false
    },
    email:{
        type:STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:{
                args:true,
                msg:'Invalid email'
            }
        }
    },
    privilege:{
        type:STRING,
        allowNull:false,
        defaultValue:'user'
    }})
 
User.associate= models =>{
    User.hasMany(models.Item,{
        foreignKey:"userId",
        as:'items'
    })
}

return User

}