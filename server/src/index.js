import { ApolloServer, makeExecutableSchema } from "apollo-server";
import typeDefs from "./gql/types";
import resolvers from "./gql/resolvers";
import models from "./models";
require ("dotenv").config()

/*============================================
ANCHOR schema
=============================================*/

const schema= makeExecutableSchema({
  typeDefs,
  resolvers,
})

const jwtC= ({req})=>{
  const token = req.headers.authorization;

      if (token) {
        try {
          const user = jwt.verify(
            token.replace("Bearer ",""),
            process.env.SECRET_KEY
          );
          return {
            user,
          };
        } catch (error) {
          console.log(error);
          throw new Error("Token invalido");
        }
      }
}

/*============================================
ANCHOR Apollo server
=============================================*/

const apolloServer = new ApolloServer({
  schema,
  context: {
    models,
    jwtC
  },
});

const alter=true;
const force= false;

models.sequelize.sync({alter,force}).then(() => {
  apolloServer.listen(5000).then(({ url }) => {
    console.log(`Running on port ${url}`);
  });
});
