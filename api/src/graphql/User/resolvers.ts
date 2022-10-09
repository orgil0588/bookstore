import bcrypt from "bcrypt";
import User from "../../models/User";
import jwt from "jsonwebtoken";
import { ApolloError } from "apollo-server/dist/exports";
const queries = {
  users: async (_root: any, _args: any) => {
    return User.find();
  },
  getUser: async (_root: any, _args: any) => {
    return User.findById(_args.id);
  },
};
const mutations = {
  register: async (_root: any, { username, password, role }: any) => {
    const secret: any = process.env.JWT_SECRET;
    const expire: any = process.env.JWT_EXPIRES_IN;
    const oldUser = await User.findOne({ username });

    if (oldUser) {
      throw new Error("A user already registered");
    }

    let encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      password: encryptedPassword,
      role: role,
    });
    const token = jwt.sign(
      {
        user_id: newUser._id,
        username,
      },
      secret,
      {
        expiresIn: expire,
      }
    );

    newUser.token = token;

    const res: any = await newUser.save();

    return {
      id: res.id,
      ...res._doc,
    };
  },

  login: async (_root: any, { username, password }: any) => {
    const user: any = await User.findOne({ username });

    // const a: any = await bcrypt.compare(password, user.password);

    if (user && (await bcrypt.compare(password, user.password))) {
      const secret: any = process.env.JWT_SECRET;
      const expire: any = process.env.JWT_EXPIRES_IN;
      const token = jwt.sign(
        {
          user_id: user._id,
          username,
        },
        secret,
        {
          expiresIn: expire,
        }
      );
      user.token = token;
      return {
        id: user._id,
        ...user._doc,
      };
    } else {
      throw new ApolloError("Incorrect password", "INCORRECT_PASSWORD");
    }
  },
};

export const resolvers = { queries, mutations };
