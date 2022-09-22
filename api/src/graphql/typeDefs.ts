
import { gql } from "apollo-server-express";
import { Book } from "./Book";

const typeDefs = gql`
  ${Book.types}
  
  type Query {
    ${Book.queries}
  }
  type Mutation {
    ${Book.mutations} 
  }
  

`;

export default typeDefs;