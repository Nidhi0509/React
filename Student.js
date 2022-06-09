import React from "react";
import './Student.css';
class Student extends React.Component{
    constructor(props){
        super(props)
        this.name=this.props.name
        this.course=this.props.course
        this.state={
           course:this.props.course 
        }
    }
    changeCourse=()=>{
        if(this.state.course==='MCA')
        this.setState({course:'MBA' })
        else 
        this.setState({course:'MCA' })
    }
    render(){
        return(
            <div className="Student">
                <h1>Name is: {this.props.name}</h1>
                <h1>Age is: {this.props.age}</h1>
                <h1>Course is: {this.state.course}</h1>
                <button onClick={this.changeCourse}>Change Course</button>
            </div>
        )
    }
}export default Student;