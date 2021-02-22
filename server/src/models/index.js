import Sequelize from 'sequelize';

import {$db} from '../config'

const {database,username,password,dialect}= $db();

const sequelize= new Sequelize(database,username,password,{
    dialect,
    define: {
        undescored:true,
    }
});


const models= {
    Item:sequelize.import('./Item'),
    User:sequelize.import('./User'),
}

Object.keys(models).forEach(modelName=>{
    if('associate' in models[modelName]){
        models[modelName].associate(models)
    }
})

models.sequelize=sequelize

export default models;