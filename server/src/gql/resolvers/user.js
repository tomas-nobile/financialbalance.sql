import userController from "../controllers/user.controller";

export default {
  Query: {
    getUsers: (_, args, { models }) => {
      return models.User.findAll({
        include: [
          {
            model: models.Item,
            as: "items",
          },
        ],
      });
    },
  },
  Mutation: {
    createUser: (_, { input }, { models }) =>
      userController.createUser(input, models),
      login: (_, { input }, { models }) =>
      userController.login(input, models),
  }
    
};
