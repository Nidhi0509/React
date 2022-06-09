import React from "react";
import Salary from './Salary';
class Employee extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            Name:this.props.Name,
            Id:this.props.Id,
            Department:this.props.Department,
        }

    }

    render()
    {
        return(
            <div>
               <h1>Employee Data</h1>
               <p>Employee Name:<input type='text' defaultValue={this.state.Name} ref='name'></input></p>
               <p>Employee Id:<input type='text' defaultValue={this.state.Id} ref='id'></input></p>
               <p>Employee Department:<input type='text' defaultValue={this.state.Department} ref='dept'></input></p>
               <Salary Basic={this.props.Basic} HRA={this.props.HRA} MiscAllowance={this.props.MiscAllowance}/>
            </div>
        )
    }
}
export default Employee;