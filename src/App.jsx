import { Route, Routes } from "react-router-dom";
import { UsersPage } from './pages/UsersPage'
import { PostsPage } from './pages/PostsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/users/:id/posts" element={<PostsPage />} />
      <Route path="*" element={<UsersPage />} />
    </Routes>
  );
}

export default App;
