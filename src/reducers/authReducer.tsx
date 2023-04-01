import { types } from '../components/types/types';

export const authReducer = (state:object = {}, action: any) => {
  
    switch(action.type){
        case types.login:
           return {
            uid: action.payload.iud,
            name: action.payload.displayName
           } 

        case types.logout:
        return {} 

        default:
            return state;
    }

}
