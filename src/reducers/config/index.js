import { 
  SET_FORM,
  RESET_CONFIG,
  SET_BASEURL,
  SET_LANGUAGE
} from '../../actions/types';

const initialState = {
  formModel:{
    protokol:'',
    domain:'',
    port:''
  },
  baseUrl:'',
  Mylanguage:'en'
}

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM:
      return {
        ...state,
        formModel:{
          ...state.formModel,
          [action.inputType]: action.inputValue,
        },
      };
    case RESET_CONFIG:
      return {
        ...state,
        formModel:{
          protokol:'',
          domain:'',
          port:''
        }
      };
    case SET_BASEURL :
      let prot_number = parseInt(action.formModel.port)
      let port        = isNaN(prot_number)  ? '':':' + action.formModel.port
      let baseUrl     = action.formModel.protokol+'://'+ action.formModel.domain + port
      return{
        ...state, 
        baseUrl: baseUrl
      };
    case SET_LANGUAGE:
      return{
        ...state, 
        Mylanguage: action.Mylanguage
      };
    default:
      return state;
  }
}

export default configReducer;