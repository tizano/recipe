export const schema = gql`
  type Image {
    id: String!
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    profiles: [Profile]!
    recipes: [Recipe]!
    ingredients: [Ingredient]!
  }

  type Query {
    images: [Image!]! @requireAuth
    image(id: String!): Image @requireAuth
  }

  input CreateImageInput {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }

  input UpdateImageInput {
    filename: String
    mimetype: String
    encoding: String
    url: String
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: String!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: String!): Image! @requireAuth
  }
`
