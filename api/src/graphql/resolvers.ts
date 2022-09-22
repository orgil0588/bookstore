
import { Book } from './Book'

const resolvers = {
  Query: {
    ...Book.resolvers.queries,
  },
  Mutation: {
    ...Book.resolvers.mutations,
  }
};

export default resolvers;