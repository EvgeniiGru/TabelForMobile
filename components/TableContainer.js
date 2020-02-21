import { connect } from 'react-redux'
import React from 'react' 
import { addNewTableMap, changeValueTableMap, deleteAllValueInMap, handleMenu }  from "../redux/TableReducer"
import MenuTable from './DrawMenu'

class TableContainer extends React.Component{
 render(){
   return <MenuTable {...this.props}/>
 }
}


let mapState = (state) =>{
    return{
        ...state.table
    }
}

export default connect(mapState,
{addNewTableMap,
changeValueTableMap,
deleteAllValueInMap,
handleMenu
})(TableContainer)
