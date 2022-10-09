import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server";

export const auth = (context: any) => {
  const authHeader = context.req.header.authorization;

  if (authHeader) {
    const token = authHeader.split("Bearer")[1];
    if (token) {
      const secret: any = process.env.JWT_SECRET;
      try {
        const user = jwt.verify(token, secret);
        return user;
      } catch (error) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error("Authentication token is must be 'Bearer [token]'");
  }
  throw new Error("Authorization header must be provided");
};
