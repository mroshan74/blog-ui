import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserLists extends React.Component{
    constructor(){
        super()
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) =>{
                const users = response.data
                this.setState({users})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return(
            <div>
                <h2>User Lists - {this.state.users.length}</h2>
                <ul>{
                    this.state.users.map((user,i) =>{
                        return(
                            <li key={i}>
                                <Link to = {`users/${user.id}`}>{user.name}</Link>
                            </li>
                        )
                    })
                }</ul>
            </div>
        )
    }
}

export default UserLists 