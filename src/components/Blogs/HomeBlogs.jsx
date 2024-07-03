import BlogCard from "./BlogCard";
import '../../App.css'
import blogData from './Blogs.json'; // Import the JSON data


export default function HomeBlogs() {
  return (
    <div>
      <div className="flex flex-row justify-between px-10">
        <a href="/blog1" className="text-base font-bold text-xl hover:text-white hover:bg-primary hover:rounded-lg hover:px-4 hover:py-2 cursor-pointer relative transition-all duration-300">
          Blogs
        </a>
        <div className="text-base text-xl font-bold hover:text-white hover:bg-primary hover:rounded-lg hover:px-4 hover:py-2 cursor-pointer relative transition-all duration-300">
          Read more
        </div>
      </div>

      <div className="overflow-x-auto w-screen h-full p-10">

        <div className="flex space-x-4 w-screen h-full">
          {blogData.map((post, index) => (
            <BlogCard
              key={index}
              img={post.img}
              topic={post.topic}
              content={post.content}
              date={post.date}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
