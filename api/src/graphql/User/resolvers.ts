import User from "../../models/User";
const queries = {
  users: async (_root: any, _args: any) => {
    return User.find();
  },
  getUser: async (_root: any, _args: any) => {
    return User.findById(_args.id);
  },
};
const mutations = {
  createUser: async (_root: any, _args: any) => {
    const { username, password, role } = _args;
    const newUser = {
      username,
      password,
      role,
    };
    return await User.create(newUser);
  },
};

export const resolvers = { queries, mutations };
