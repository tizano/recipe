import type { Prisma, Image } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ImageCreateArgs>({
  image: {
    one: {
      data: {
        filename: 'String',
        mimetype: 'String',
        encoding: 'String',
        url: 'String',
        updatedAt: '2023-08-13T20:36:04.905Z',
      },
    },
    two: {
      data: {
        filename: 'String',
        mimetype: 'String',
        encoding: 'String',
        url: 'String',
        updatedAt: '2023-08-13T20:36:04.905Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Image, 'image'>
