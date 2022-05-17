import React from 'react'
import { connect } from 'react-redux'

const PageReduxDefault = (props) => {
  return (
    <div>
        total Harga :
        {console.log(props , "ini props")}
        {props.dataFromRedux}
        <button onClick={()=>{props.addItem()}}> +</button>
        <button onClick={()=>{props.addItem()}}> -</button>
    </div>
  )
}

const mapStateToProps =(state)=>{
    return {
        dataFromRedux : state.totalHarga
    }
}

const mapDispatchToProps =(dispatch)=>{
  return {
    addItem : ()=>dispatch({type :"ADD_HARGA"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageReduxDefault)
