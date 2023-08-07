import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './Layout';
import IndexPage from './pages/indexPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { UserContextProvider } from "./UserContext";
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'/signin'} element={<SignInPage />} />
          <Route path={'/signup'} element={<SignUpPage />} />
          <Route path={'/create'} element={<CreatePost />} />
          <Route path={"/post/:id"} element={<PostPage />} />
          <Route path={"/edit/:id"} element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
