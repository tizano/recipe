import type {
  QueryResolvers,
  MutationResolvers,
  RecipeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const recipes: QueryResolvers['recipes'] = () => {
  return db.recipe.findMany()
}

export const recipe: QueryResolvers['recipe'] = ({ id }) => {
  return db.recipe.findUnique({
    where: { id },
  })
}

export const createRecipe: MutationResolvers['createRecipe'] = ({ input }) => {
  return db.recipe.create({
    data: input,
  })
}

export const updateRecipe: MutationResolvers['updateRecipe'] = ({
  id,
  input,
}) => {
  return db.recipe.update({
    data: input,
    where: { id },
  })
}

export const deleteRecipe: MutationResolvers['deleteRecipe'] = ({ id }) => {
  return db.recipe.delete({
    where: { id },
  })
}

export const Recipe: RecipeRelationResolvers = {
  ingredients: (_obj, { root }) => {
    return db.recipe.findUnique({ where: { id: root?.id } }).ingredients()
  },
  steps: (_obj, { root }) => {
    return db.recipe.findUnique({ where: { id: root?.id } }).steps()
  },
  image: (_obj, { root }) => {
    return db.recipe.findUnique({ where: { id: root?.id } }).image()
  },
  author: (_obj, { root }) => {
    return db.recipe.findUnique({ where: { id: root?.id } }).author()
  },
}
