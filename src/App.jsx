import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Syllabus from './components/Syllabus/Syllabus';
import Blogs from './components/Blogs/HomeBlogs';
import SingleBlogPage from './components/Blogs/SingleBlog';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import blogData from './components/Blogs/Blogs.json'; // Import the JSON data

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

blogData.map((blog) => (
  console.log(blog.id)
))

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-screen overflow-x-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<div><Home /><Blogs /></div>} />

        {/* Dynamically generate routes for each blog post */}
        {blogData.map((blog) => (
          <Route
            key={blog.id} // Assuming your JSON data has an "id" field
            path={`/${blog.id}`}
            element={<SingleBlogPage blog={blog.id} />} // Pass the blog data as a prop
          />
        ))}

        {/* Add a catch-all route */}
        <Route path="*" element={<Blogs />} />

        <Route path="/SignUp" element={<Login />} />
      </Routes>

      <Syllabus />
      <Footer />
    </div>
  );
}
