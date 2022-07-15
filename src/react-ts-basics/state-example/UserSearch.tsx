import { useState } from "react";

const users = [
  { name: "Alex", age: 20 },
  { name: "Rohan", age: 20 },
  { name: "Rocky", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: String; age: number } | undefined>();

  const findUser = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={findUser}>Find</button>
      <div>
          {user && user.name}
          {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
