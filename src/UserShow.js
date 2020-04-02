import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      userPosts: []
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
      )
      .then(response => {
        const user = response.data;
        this.setState({ user });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`)
      .then(response => {
        const userPosts = response.data
        this.setState({ userPosts })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render(){
      return (
        <div>
          <h2>username : {this.state.user.name}</h2>
          <h3>Posts made</h3>
          <ul>
            {this.state.userPosts.map((post, i) => {
              return (
                <li key={i}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      );
  }
}

export default UserShow