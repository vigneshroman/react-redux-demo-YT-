import React from 'react'
import {buyIceCream} from '../redux'
import {connect } from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of icecreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

//To Access state into our component , we define mapStateToProps , similarly mapDispatchToProps
const mapStateToProps= state=>{
    return{
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (IceCreamContainer)
//connect connects react component  to store...