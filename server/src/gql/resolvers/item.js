export default {
    Query:{
        getItem:(_,args,{models})=>{
            return models.Item.findAll()
        }
    },
    Mutation:{
        createItem:(_,{input},{models})=>
         models.Item.create({...input})
        
    }
}