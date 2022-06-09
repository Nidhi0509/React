import React from "react";

class Salary extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            Basic:this.props.Basic,
            HRA:this.props.HRA,
            MiscAllowance:this.props.MiscAllowance,
            UpdatedSalary:''
       }
    }
    changeSalary()
    {
        var updatedSal;
        this.setState({
            Basic:this.refs.basic.value,
            HRA:this.refs.hra.value,
            MiscAllowance:this.refs.misc.value
            
        })
        updatedSal=parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+parseInt(this.refs.misc.value)
        this.setState({
            UpdatedSalary:updatedSal
        })
    }
    render()
    {
        return(
            <>
                <h1>Salary Data</h1>
                <p>Basic :<input type='text' defaultValue={this.state.Basic} ref='basic'></input></p>
                <p>HRA :<input type='text' defaultValue={this.state.HRA} ref='hra'></input></p>
                <p>MiscAllowance :<input type='text' defaultValue={this.state.MiscAllowance} ref='misc'></input></p>
                <p>Updated Salary :<input type='text' defaultValue={this.state.UpdatedSalary}></input></p>
                <button onClick={this.changeSalary}>Update Salary</button>
            </>
        )
    }
}
export default Salary;