export const schema = gql`
  type Ingredient {
    id: String!
    name: String!
    description: String
    image: Image
    recipe: Recipe
    type: IngredientType!
    measurement: Measurement!
    createdAt: DateTime!
    updatedAt: DateTime!
    recipeId: String
    imageId: String
  }

  enum IngredientType {
    VEGETABLE
    FRUIT
    MEAT
    FISH
    DAIRY
    GRAIN
  }

  enum Measurement {
    GRAM
    KILOGRAM
    MILLILITER
    LITER
    TEASPOON
    TABLESPOON
    CUP
  }

  type Query {
    ingredients: [Ingredient!]! @requireAuth
    ingredient(id: String!): Ingredient @requireAuth
  }

  input CreateIngredientInput {
    name: String!
    description: String
    type: IngredientType!
    measurement: Measurement!
    recipeId: String
    imageId: String
  }

  input UpdateIngredientInput {
    name: String
    description: String
    type: IngredientType
    measurement: Measurement
    recipeId: String
    imageId: String
  }

  type Mutation {
    createIngredient(input: CreateIngredientInput!): Ingredient! @requireAuth
    updateIngredient(id: String!, input: UpdateIngredientInput!): Ingredient!
      @requireAuth
    deleteIngredient(id: String!): Ingredient! @requireAuth
  }
`
