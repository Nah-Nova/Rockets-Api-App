import{lightTheme} from '../views/Theme'
import {SWITCH_THEME} from './themeActions'

const initialState ={
    theme: lightTheme
}

const themeReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case SWITCH_THEME:
            return {theme: actions.theme}     

            default:
                return state;
    }     
};

export default themeReducer;