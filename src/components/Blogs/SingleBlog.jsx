import blogData from './Blogs.json'; // Import the JSON data

export default function SingleBlog({ blog }) {

    console.log(blog);

    return (
        <div>
            {blogData.map((post, index) => (

                (post.id === blog) ? // Use triple equals for strict equality comparison
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <div>
                            <h1 className="text-2xl font-bold mt-4">{post.topic}</h1>
                            <p className="text-gray-500 text-sm mt-2">{post.date}</p>
                        </div>
                        <img src={post.img} alt={post.topic} className="w-full h-[400px] object-cover object-center rounded-lg py-10" />
                        <div className="text-[16px] text-justify px-4">
                            <p>{post.content}</p>
                        </div>
                    </div>
                    : <div key={index}></div>
            ))}
        </div>
    );
}
