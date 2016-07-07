import * as ACTIONS from '../src/actions'

describe("It builds an action to", () => {
  it("activate a trist by number", () => {
    expect(ACTIONS.activateVTrist(0)).toEqual({type:'ACTIVATE_VTRIST', tristIndex:0})
  })
})

