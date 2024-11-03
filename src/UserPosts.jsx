import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  min-height: 100vh;
`;

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.textColor};
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const UserButton = styled.button`
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ selected, theme }) =>
    selected ? theme.buttonColor : "#4CAF50"};
  color: white;
  border: none;
  border-radius: 4px;
`;

const PostContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const PostTitle = styled.h3`
  font-size: 1.2em;
  color: ${({ theme }) => theme.textColor};
`;

const PostBody = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.textColor};
`;

function UsersPosts() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fetchUsers = async () => {
      const responce = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const fetchPosts = async (userId) => {
    const responce = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    setPosts(response.data);
    setSelectedUser(userId);
  };

  return (
    <Container>
      <h1>მომხმარებლები და პოსტები</h1>
      <ToggleButton onClick={toggleTheme}>
        {theme === "light" ? "Night Mode" : "Day Mode"}
      </ToggleButton>

      <div>
        <h2>მომხმარებლების სია</h2>
        {users.map((user) => (
          <UserButton
            key={user.id}
            onClick={() => fetchPosts(user.id)}
            selected={selectedUser === user.id}
          >
            {user.name}
          </UserButton>
        ))}
      </div>

      {selectedUser && (
        <PostContainer>
          <h2>პოსტები</h2>
          {posts.map((post) => (
            <div key={post.id}>
              <PostTitle>{post.title}</PostTitle>
              <PostBody>{post.body}</PostBody>
            </div>
          ))}
        </PostContainer>
      )}
    </Container>
  );
}

export default UsersPosts;
