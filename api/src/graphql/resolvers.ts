import { Book } from "./Book";
import { User } from "./User";
const resolvers = {
  Query: {
    ...Book.resolvers.queries,
    ...User.resolvers.queries
  },
  Mutation: {
    ...Book.resolvers.mutations,
    ...User.resolvers.mutations
  },
};

export default resolvers;
