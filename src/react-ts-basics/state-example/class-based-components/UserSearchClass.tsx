import React from "react";

interface User {
  name: string;
  age: number;
}

// for state props
interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}


class UserSearchClass extends React.Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  findUser = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    );
    this.setState({user: foundUser});
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.findUser}>Find</button>
        <div>
          {user && user.name}
          {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearchClass;
