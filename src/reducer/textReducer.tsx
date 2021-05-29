export const textReducer = (state : string = "", action : any) => {
    switch(action.type) {
        case 'TEXT':
            return action.payload;
        default: 
            return state;
    }
}