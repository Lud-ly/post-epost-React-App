import React, { Component } from 'react'
import Users from '../components/users'


class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      expanded: false
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then((data) => {
        console.log("userlistrandomuser data", data.results);
        this.setState({ users: data.results })
      })
      .catch(console.log)
  }
  render() {
    return (
      <div>
        {this.state.users[0] ? <Users users={this.state.users} key={name.title} /> : <div className="loading"><h1>chargement</h1>
        </div>}
      </div>
    )
  }
}



export default UsersList