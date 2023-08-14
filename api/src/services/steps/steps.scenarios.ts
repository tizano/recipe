import type { Prisma, Step } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StepCreateArgs>({
  step: {
    one: {
      data: {
        description: 'String',
        order: 9870353,
        updatedAt: '2023-08-13T20:36:15.348Z',
        recipe: {
          create: {
            title: 'String',
            description: 'String',
            status: 'PUBLISHED',
            updatedAt: '2023-08-13T20:36:15.348Z',
            author: {
              create: {
                email: 'String6332124',
                password: 'String',
                updatedAt: '2023-08-13T20:36:15.348Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        description: 'String',
        order: 945437,
        updatedAt: '2023-08-13T20:36:15.348Z',
        recipe: {
          create: {
            title: 'String',
            description: 'String',
            status: 'PUBLISHED',
            updatedAt: '2023-08-13T20:36:15.348Z',
            author: {
              create: {
                email: 'String1647467',
                password: 'String',
                updatedAt: '2023-08-13T20:36:15.348Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Step, 'step'>
