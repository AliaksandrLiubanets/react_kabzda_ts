export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

type setCollapsedAT = {
    type: string
}
type ActionsType = setCollapsedAT

const initialState = {
    isCollapsed: false
}

export type StateType = {
    isCollapsed: boolean
}

export const reducerUncontrolledAccordion = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, isCollapsed: !state.isCollapsed}
        default:
            return state
    }
}