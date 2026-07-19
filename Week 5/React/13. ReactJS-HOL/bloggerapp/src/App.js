import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

  const showCourse = true;
  const showBook = true;
  const showBlog = true;

  return (
    <div className="container">

      {showCourse && <CourseDetails />}

      {showBook ? <BookDetails /> : null}

      {showBlog ? <BlogDetails /> : <h2>No Blogs Available</h2>}

    </div>
  );
}

export default App;