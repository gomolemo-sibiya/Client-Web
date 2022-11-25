import * as types from "../actionTypes/admin_actionType";
const initialState = {
  adminUsers: [],
  adminUser: {},
  loading: false,
  //New
  pageLimit: 6,
  currentPage: 0,
  paginationMode: true
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_ADMIN_USERS_START:
    case types.CREATE_ADMIN_USER_START:
    case types.DELETE_ADMIN_USER_START:
    case types.UPDATE_ADMIN_USER_START:
    case types.SEARCH_ADMIN_USER_START:
    case types.FILTER_ADMIN_USER_START:
    case types.SORT_ADMIN_USER_START:  
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_ADMIN_USERS_SUCCESS:
      return {
        ...state,
        adminUsers: action.payload.adminUsers,
        loading: false,
        currentPage: state.currentPage + action.payload.currentPage,
        paginationMode: true
      };
    case types.SEARCH_ADMIN_USER_SUCCESS:
    case types.FILTER_ADMIN_USER_SUCCESS:
    case types.SORT_ADMIN_USER_SUCCESS:  
      return {
        ...state,
        adminUsers: action.payload,
        loading: false,
        paginationMode: false
      };
    case types.LOAD_ADMIN_USERS_ERROR:
    case types.CREATE_ADMIN_USER_ERROR:
    case types.DELETE_ADMIN_USER_ERROR:
    case types.UPDATE_ADMIN_USER_ERROR:
    case types.SEARCH_ADMIN_USER_ERROR:
    case types.FILTER_ADMIN_USER_ERROR:
    case types.SORT_ADMIN_USER_ERROR:  
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.DELETE_ADMIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPage: 0      
      };
    case types.CREATE_ADMIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_ADMIN_USER_SUCCESS:
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