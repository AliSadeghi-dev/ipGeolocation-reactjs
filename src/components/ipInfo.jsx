import React, { Component } from 'react'
import Info from './info';
import getInfo from "../services/getInfo"

export default class ipInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            info:"",
            imgadd:""
        }
    }
    componentDidMount(){
        getInfo().then(data=>{
            this.setState({info:data,imgadd:data.flag.img})
        });
    }

  render() {
    return (
      <Info info={this.state.info}  imgadd={this.state.imgadd}/>
    )
  }
}
