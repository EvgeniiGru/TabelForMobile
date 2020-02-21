const CHANGE_VALUE_TABLE_MAP = "CHANGE_VALUE_TABLE_MAP";
const ADD_NEW_TABLE_MAP = "ADD_NEW_TABLE_MAP";
const DELET_VALUE_iN_TABLE_MAP = "DELET_VALUE_iN_TABLE_MAP";
const HANDLE_MENU = "HANDLE_MENU";

let initialization = {
    tableMap:[],
    valueTabelMap:"",
    menuOpen: false, 
    error: false
}

const TableReducer = (state = initialization, action) => {
    switch (action.type) {
        case ADD_NEW_TABLE_MAP:
         return {
             ...state,
             tableMap:state.valueTabelMap!==""?[...state.tableMap, {text:state.valueTabelMap}]:[...state.tableMap],
             valueTabelMap:"",
             error:state.valueTabelMap===""?true:false
          }
        case CHANGE_VALUE_TABLE_MAP:
            return {
                ...state,
                valueTabelMap: action.value,
                error:action.value===""?true:false
         }
         case DELET_VALUE_iN_TABLE_MAP:
            return {
                ...state,
                tableMap:[]
         }
         case HANDLE_MENU:
            return {
                ...state,
                menuOpen: !state.menuOpen
         }
         default:  
         return state;
    }
};

export default TableReducer;

export const addNewTableMap = () => ({ type: ADD_NEW_TABLE_MAP});
export const changeValueTableMap = (value) => ({type: CHANGE_VALUE_TABLE_MAP, value});
export const deleteAllValueInMap = () => ({type:DELET_VALUE_iN_TABLE_MAP})
export const handleMenu = () => ({type:HANDLE_MENU})
