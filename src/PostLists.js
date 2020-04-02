import React from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostLists extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data
        this.setState({ posts })
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    return (
      <div>
        <h2>Posts written by users - {this.state.posts.length}</h2>
        <ul>
          {this.state.posts.map((post, i) => {
            return (
              <li key={i}>
                <Link to={`posts/${post.id}`}>{post.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PostLists
