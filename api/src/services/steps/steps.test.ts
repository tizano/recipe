import type { Step } from '@prisma/client'

import { steps, step, createStep, updateStep, deleteStep } from './steps'
import type { StandardScenario } from './steps.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('steps', () => {
  scenario('returns all steps', async (scenario: StandardScenario) => {
    const result = await steps()

    expect(result.length).toEqual(Object.keys(scenario.step).length)
  })

  scenario('returns a single step', async (scenario: StandardScenario) => {
    const result = await step({ id: scenario.step.one.id })

    expect(result).toEqual(scenario.step.one)
  })

  scenario('creates a step', async (scenario: StandardScenario) => {
    const result = await createStep({
      input: {
        description: 'String',
        order: 6037404,
        recipeId: scenario.step.two.recipeId,
        updatedAt: '2023-08-13T20:36:15.300Z',
      },
    })

    expect(result.description).toEqual('String')
    expect(result.order).toEqual(6037404)
    expect(result.recipeId).toEqual(scenario.step.two.recipeId)
    expect(result.updatedAt).toEqual(new Date('2023-08-13T20:36:15.300Z'))
  })

  scenario('updates a step', async (scenario: StandardScenario) => {
    const original = (await step({ id: scenario.step.one.id })) as Step
    const result = await updateStep({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a step', async (scenario: StandardScenario) => {
    const original = (await deleteStep({ id: scenario.step.one.id })) as Step
    const result = await step({ id: original.id })

    expect(result).toEqual(null)
  })
})
