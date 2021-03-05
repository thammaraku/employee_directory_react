import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

// convert function to class
class App extends Component {

  state = {
    friendsList: friends
  };

  // use this method to remove when x this clicked it will not modify state but it will call this function to change state

  removeFriend = (id) => {
    console.log("x was clicked on " + id);

    const newfriendsList = this.state.friendsList.filter(item => item.id !== id);

    this.setState({friendsList: newfriendsList});
    console.log(newfriendsList);
    
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>

        {this.state.friendsList.map((item) => (
          <FriendCard
            key={item.id}
            name={item.name}
            image={item.image}
            occupation={item.occupation}
            location={item.location}
            // this is the reason we use class to use this function
            removeFriend={this.removeFriend}
            id={item.id}
          />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
