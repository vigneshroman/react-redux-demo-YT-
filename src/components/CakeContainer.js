import React from 'react'
import {buyCake} from '../redux'
import {connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

//To Access state into our component , we define mapStateToProps , similarly mapDispatchToProps
const mapStateToProps= state=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (CakeContainer)
//connect connects react component  to store...