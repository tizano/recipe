export const schema = gql`
  type Recipe {
    id: String!
    title: String!
    description: String!
    ingredients: [Ingredient]!
    steps: [Step]!
    image: [Image]!
    author: User!
    authorId: String!
    status: RecipeStatus!
    publishedAt: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum RecipeStatus {
    PUBLISHED
    DRAFT
  }

  type Query {
    recipes: [Recipe!]! @requireAuth
    recipe(id: String!): Recipe @requireAuth
  }

  input CreateRecipeInput {
    title: String!
    description: String!
    authorId: String!
    status: RecipeStatus!
    publishedAt: DateTime
  }

  input UpdateRecipeInput {
    title: String
    description: String
    authorId: String
    status: RecipeStatus
    publishedAt: DateTime
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe! @requireAuth
    updateRecipe(id: String!, input: UpdateRecipeInput!): Recipe! @requireAuth
    deleteRecipe(id: String!): Recipe! @requireAuth
  }
`
