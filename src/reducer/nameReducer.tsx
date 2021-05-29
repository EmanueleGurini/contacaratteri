export const nameReducer = (state = "Ema", action : any) => {
    switch(action.type) {
        case 'NAME':
            return action.name;
        default: 
            return state;
    }
}
 