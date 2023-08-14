import type { Prisma, Recipe } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecipeCreateArgs>({
  recipe: {
    one: {
      data: {
        title: 'String',
        description: 'String',
        status: 'PUBLISHED',
        updatedAt: '2023-08-13T20:36:55.208Z',
        author: {
          create: {
            email: 'String5020433',
            password: 'String',
            updatedAt: '2023-08-13T20:36:55.208Z',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        description: 'String',
        status: 'PUBLISHED',
        updatedAt: '2023-08-13T20:36:55.208Z',
        author: {
          create: {
            email: 'String3703874',
            password: 'String',
            updatedAt: '2023-08-13T20:36:55.208Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Recipe, 'recipe'>
