import React from 'react'


class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://imgflip.com/lbij.jpg"
        }
    }

    render(){
        return(
            <h1>MemeGenerator</h1>
        )
    }

}





export default MemeGenerator