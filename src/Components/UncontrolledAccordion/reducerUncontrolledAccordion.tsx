export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

type setCollapsedAT = {
    type: string
}
type ActionsType = setCollapsedAT

export const reducerUncontrolledAccordion = (state: boolean, action: ActionsType): boolean => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return !state
        default:
            return state
    }
}