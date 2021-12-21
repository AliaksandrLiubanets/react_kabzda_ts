import {reducerUncontrolledAccordion, StateType, TOGGLE_COLLAPSED} from './reducerUncontrolledAccordion'

let state: StateType

test('Accordion shoul collapse', () => {
    state = {
        isCollapsed: false
    }

    reducerUncontrolledAccordion(state, {type: TOGGLE_COLLAPSED})

    expect(state.isCollapsed).toBe(true)
})