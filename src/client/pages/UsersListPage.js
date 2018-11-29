import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const mapState = state => ({
  users: state.users
})

const actions = {
  fetchUsers
}

const loadData = (store) => {
  return store.dispatch(fetchUsers());
}

class UsersListPage extends Component {
  componentDidMount(){
    this.props.fetchUsers();
  }

  renderUsers(){
    return this.props.users.map( user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    return (
      <div>
        Here's a big list of Users
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

export default {
  loadData,
  component: connect(mapState, actions)(UsersListPage)
}

