import React from "react";
import { ThemeProvider } from "./ThemeContect";
import UsersPosts from "./UserPosts";

function App() {
  return (
    <ThemeProvider>
      <UsersPosts />
    </ThemeProvider>
  );
}

export default App;
