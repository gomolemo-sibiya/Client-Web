import * as types from "./actionType";
const initialState = {
  users: [],
  user: {},
  loading: false,
  //New
  pageLimit: 6,
  currentPage: 0,
  paginationMode: true
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
    case types.CREATE_USER_START:
    case types.DELETE_USER_START:
    case types.UPDATE_USER_START:
    case types.SEARCH_USER_START:
    case types.FILTER_USER_START:
    case types.SORT_USER_START:  
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
        currentPage: state.currentPage + action.payload.currentPage,
        paginationMode: true
      };
    case types.SEARCH_USER_SUCCESS:
    case types.FILTER_USER_SUCCESS:
    case types.SORT_USER_SUCCESS:  
      return {
        ...state,
        users: action.payload,
        loading: false,
        paginationMode: false
      };
    case types.LOAD_USERS_ERROR:
    case types.CREATE_USER_ERROR:
    case types.DELETE_USER_ERROR:
    case types.UPDATE_USER_ERROR:
    case types.SEARCH_USER_ERROR:
    case types.FILTER_USER_ERROR:
    case types.SORT_USER_ERROR:  
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: 0      
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: 0
      };
    default:
      return state;
  }
};

export default usersReducers;
// case types.DELETE_USER_SUCCESS:
//   return {
//    ...state,
//    loading: false,
//    users: state.users.filter((item) => item.id !== action.payload),
// };