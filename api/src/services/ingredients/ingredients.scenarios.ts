import type { Prisma, Ingredient } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.IngredientCreateArgs>({
  ingredient: {
    one: {
      data: {
        name: 'String',
        type: 'VEGETABLE',
        measurement: 'GRAM',
        updatedAt: '2023-08-13T20:37:09.955Z',
      },
    },
    two: {
      data: {
        name: 'String',
        type: 'VEGETABLE',
        measurement: 'GRAM',
        updatedAt: '2023-08-13T20:37:09.955Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Ingredient, 'ingredient'>
