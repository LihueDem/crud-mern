import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShowBlogs from "./components/ShowBlog";
import CreateBlog from "./components/CreateBlog";
import EditBlog from "./components/EditBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBlogs />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
