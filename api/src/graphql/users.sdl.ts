export const schema = gql`
  type User {
    id: String!
    email: String!
    password: String!
    name: String
    createdAt: DateTime!
    updatedAt: DateTime!
    profile: Profile
    recipes: [Recipe]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    password: String!
    name: String
  }

  input UpdateUserInput {
    email: String
    password: String
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
