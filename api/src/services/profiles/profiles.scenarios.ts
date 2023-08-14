import type { Prisma, Profile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProfileCreateArgs>({
  profile: {
    one: {
      data: {
        updatedAt: '2023-08-13T23:18:36.035Z',
        user: {
          create: {
            email: 'String1601861',
            password: 'String',
            updatedAt: '2023-08-13T23:18:36.035Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-13T23:18:36.035Z',
        user: {
          create: {
            email: 'String7557923',
            password: 'String',
            updatedAt: '2023-08-13T23:18:36.035Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Profile, 'profile'>
