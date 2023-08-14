import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String8067923',
        password: 'String',
        updatedAt: '2023-08-13T23:18:24.742Z',
      },
    },
    two: {
      data: {
        email: 'String6288747',
        password: 'String',
        updatedAt: '2023-08-13T23:18:24.742Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
