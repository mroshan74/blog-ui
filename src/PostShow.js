import React from "react"
import axios from "axios"
import {Link} from 'react-router-dom'

//let fetchTried = 0

class UserShow extends React.Component {
  constructor() {
    super();
    this.state = {
      users:[],
      userPosts: [],
      userComments: [],
      username:[]
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      )
      .then(response => {
        const userPosts = response.data
        this.setState({ userPosts })
        axios
          .get(
            `https://jsonplaceholder.typicode.com/users/${userPosts.userId}`
          )
          .then(response => {
            const users = response.data;
            this.setState({ users });
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err)
      });
    
     axios
       .get(
         `https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`
       )
       .then(response => {
         const userComments = response.data;
         this.setState({ userComments });
       })
       .catch(err => {
         console.log(err);
       });
    
    // let catchId = setInterval(() => { 
    //     console.log("running", fetchTried)     
    //     axios
    //       .get(
    //         `https://jsonplaceholder.typicode.com/users/${this.state.userPosts.userId}`
    //       )
    //       .then(response => {
    //         const users = response.data
    //         this.setState({ users })
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })
    //       if(this.state.userPosts.userId != undefined || fetchTried==7){
    //         clearInterval(catchId)
    //         console.log('stopping fetch')
    //         fetchTried=0
    //       }  
    //       fetchTried++
    // }, 1200);
    
      
    //   setTimeout(() => {
    //       let username= this.state.users.find(user => user.id == this.state.userPosts.userId)
    //       this.setState({username})
    //   },2000)
  }

  render() {
    return (
      <div>
        <h2>username: {this.state.users.name}</h2>
        <h3>title: {this.state.userPosts.title} </h3>
        <h3>Body: </h3>
        <p>{this.state.userPosts.body}</p>
        <h3>Comments</h3>
        <ul>
          {this.state.userComments.map((comment, i) => {
            return <li key={i}>{comment.body}</li>;
          })}
        </ul>
        <Link to={`/users/${this.state.userPosts.userId}`}>
          Back to user posts
        </Link>
      </div>
    );
  }
}
export default UserShow