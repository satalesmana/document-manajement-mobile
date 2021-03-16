import {
    SET_ACCOUNT,
    RESET_ACCOUNT
} from '../../actions'

const initialState ={
    user:{
        id:'',
        current_team_id:'',
        department:'',
        department_id:'',
        email_verified_at:'',
        name:'',
        profile_photo_path:'',
        profile_photo_url:'',
        status:'',
    },
    token:''
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT:
            return{
                ...state,
                user:Object.assign(state.user,action.accountData.user),
                token:action.accountData.token
            }
        case RESET_ACCOUNT:
            return{
                ...state,
                user:{
                    id:'',
                    current_team_id:'',
                    department:'',
                    department_id:'',
                    email_verified_at:'',
                    name:'',
                    profile_photo_path:'',
                    profile_photo_url:'',
                    status:'',
                },
                token:''
            }
        default:
            return state
    }
};

export default accountReducer