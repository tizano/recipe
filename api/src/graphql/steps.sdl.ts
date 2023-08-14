export const schema = gql`
  type Step {
    id: String!
    description: String!
    order: Int!
    action: String
    recipe: Recipe!
    recipeId: String!
    subSteps: [Step]!
    parentStep: Step
    parentStepId: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    steps: [Step!]! @requireAuth
    step(id: String!): Step @requireAuth
  }

  input CreateStepInput {
    description: String!
    order: Int!
    action: String
    recipeId: String!
    parentStepId: String
  }

  input UpdateStepInput {
    description: String
    order: Int
    action: String
    recipeId: String
    parentStepId: String
  }

  type Mutation {
    createStep(input: CreateStepInput!): Step! @requireAuth
    updateStep(id: String!, input: UpdateStepInput!): Step! @requireAuth
    deleteStep(id: String!): Step! @requireAuth
  }
`
