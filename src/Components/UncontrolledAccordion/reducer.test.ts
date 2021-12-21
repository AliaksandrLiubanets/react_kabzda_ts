import {reducerUncontrolledAccordion, StateType, TOGGLE_COLLAPSED} from './reducerUncontrolledAccordion'

let state: StateType

test('Accordion should collapse', () => {
    state = {
        isCollapsed: false
    }

    const newState = reducerUncontrolledAccordion(state, {type: TOGGLE_COLLAPSED})

    expect(newState.isCollapsed).toBe(true)
})

test('Reducer should return state if fake action', () => {
    state = {
        isCollapsed: false
    }

    const newState = reducerUncontrolledAccordion(state, {type: "FAKE"})

    expect(newState.isCollapsed).toBe(false)
    expect(newState).toBe(state)

})