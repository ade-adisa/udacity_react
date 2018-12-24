import React, { Component } from 'react';

class List extends Component{
  render() {
      console.log('Props',this.props)
    return (
      <ol className="App-title">
      {this.props.profiles.map((profile) => (
      <li key = {profile.id}>
{this.props.users[profile.userID].name}'s favorite movie is {this.props.movies[profile.favoriteMovieID].name}
      </li>
    
    
    ))}
      
      </ol>
    );
  }
}

export default List;