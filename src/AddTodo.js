import React from 'react'

class AddTodo extends React.Component{
    state = {
        content:''
    }

    handleChange = (e) => {
        this.setState({
            content:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({content:''})
    }

    handleMouseOver = (e) => {
        
    }

    render() {
        return (
            <div className="container">
                <form className="center" onSubmit={this.handleSubmit}>
                    <label>Add new todo: </label>
                    <input type="text" onChange={this.handleChange} 
                    value={this.state.content} onMouseOver={this.handleMouseOver}/>
                </form>
            </div>
        )
    }
}

export default AddTodo