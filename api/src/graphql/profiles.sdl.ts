export const schema = gql`
  type Profile {
    id: String!
    bio: String
    image: Image
    createdAt: DateTime!
    updatedAt: DateTime!
    imageId: String
    user: User!
    userId: String!
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: String!): Profile @requireAuth
  }

  input CreateProfileInput {
    bio: String
    imageId: String
    userId: String!
  }

  input UpdateProfileInput {
    bio: String
    imageId: String
    userId: String
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: String!, input: UpdateProfileInput!): Profile!
      @requireAuth
    deleteProfile(id: String!): Profile! @requireAuth
  }
`
