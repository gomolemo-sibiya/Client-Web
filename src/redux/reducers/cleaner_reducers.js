import * as types from "../actionTypes/cleaner_actionType";

const initialState = {
  cleanerUsers: [],
  cleanerUser: {},
  loading: false,
  //New
  pageLimit: 6,
  currentPage: 0,
  paginationMode: true
};

const cleanerUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_CLEANER_USERS_START:
    case types.CREATE_CLEANER_USER_START:
    case types.DELETE_CLEANER_USER_START:
    case types.UPDATE_CLEANER_USER_START:
    case types.SEARCH_CLEANER_USER_START:
    case types.FILTER_CLEANER_USER_START:
    case types.SORT_CLEANER_USER_START:  
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_CLEANER_USERS_SUCCESS:
      return {
        ...state,
        cleanerUsers: action.payload.cleanerUsers,
        loading: false,
        currentPage: state.currentPage + action.payload.currentPage,
        paginationMode: true
      };
    case types.SEARCH_CLEANER_USER_SUCCESS:
    case types.FILTER_CLEANER_USER_SUCCESS:
    case types.SORT_CLEANER_USER_SUCCESS:  
      return {
        ...state,
        cleanerUsers: action.payload,
        loading: false,
        paginationMode: false
      };
    case types.LOAD_CLEANER_USERS_ERROR:
    case types.CREATE_CLEANER_USER_ERROR:
    case types.DELETE_CLEANER_USER_ERROR:
    case types.UPDATE_CLEANER_USER_ERROR:
    case types.SEARCH_CLEANER_USER_ERROR:
    case types.FILTER_CLEANER_USER_ERROR:
    case types.SORT_CLEANER_USER_ERROR:  
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.DELETE_CLEANER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: 0      
      };
    case types.CREATE_CLEANER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_CLEANER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: 0
      };
    default:
      return state;
  }
};

export default cleanerUsersReducer;