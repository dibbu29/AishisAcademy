export default function BlogCard({ img, topic, content, date ,id}) {
    return (
        <div className="w-full h-full">
            <div className="max-w-sm w-64 h-[520px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-primary hover:bg-primary hover:bg-opacity-30 dark:hover:bg-opacity-30">
                <a href={id}>
                    <img className="w-full h-48 rounded-t-lg object-cover" src={img} alt="" />
                </a>
                <div className="p-5 justify-center items-center">
                    <a href={id}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topic}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{content}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Date: {date}</p>
                    <a href={id} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-primary rounded-lg hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
