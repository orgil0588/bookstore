import { gql } from "apollo-server-express";
import { Book } from "./Book";
import { User } from "./User";
const typeDefs = gql`
  ${Book.types}
  ${User.types}
  
  type Query {
    ${Book.queries}
    ${User.queries}
  }
  type Mutation {
    ${Book.mutations} 
    ${User.mutations}
  }
  

`;

export default typeDefs;
