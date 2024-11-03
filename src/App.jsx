import React from "react";
import { ThemeProvider } from "./ThemeContext";
import UsersPosts from "./UserPosts";

function App() {
  return (
    <ThemeProvider>
      <UsersPosts />
    </ThemeProvider>
  );
}

export default App;
