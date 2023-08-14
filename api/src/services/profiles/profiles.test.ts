import type { Profile } from '@prisma/client'

import {
  profiles,
  profile,
  createProfile,
  updateProfile,
  deleteProfile,
} from './profiles'
import type { StandardScenario } from './profiles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('profiles', () => {
  scenario('returns all profiles', async (scenario: StandardScenario) => {
    const result = await profiles()

    expect(result.length).toEqual(Object.keys(scenario.profile).length)
  })

  scenario('returns a single profile', async (scenario: StandardScenario) => {
    const result = await profile({ id: scenario.profile.one.id })

    expect(result).toEqual(scenario.profile.one)
  })

  scenario('creates a profile', async (scenario: StandardScenario) => {
    const result = await createProfile({
      input: {
        updatedAt: '2023-08-13T23:18:36.006Z',
        userId: scenario.profile.two.userId,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-13T23:18:36.006Z'))
    expect(result.userId).toEqual(scenario.profile.two.userId)
  })

  scenario('updates a profile', async (scenario: StandardScenario) => {
    const original = (await profile({ id: scenario.profile.one.id })) as Profile
    const result = await updateProfile({
      id: original.id,
      input: { updatedAt: '2023-08-14T23:18:36.006Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-14T23:18:36.006Z'))
  })

  scenario('deletes a profile', async (scenario: StandardScenario) => {
    const original = (await deleteProfile({
      id: scenario.profile.one.id,
    })) as Profile
    const result = await profile({ id: original.id })

    expect(result).toEqual(null)
  })
})
