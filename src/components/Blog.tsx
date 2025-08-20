import type React from "react";

interface BlogPost {
  title: string;
  image: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    { title: "Inspiring Lighting at Fanuli", image: "/image/blog6.png" },
    { title: "Handcraft and Modern Australian", image: "/image/blog5.png" },
    { title: "Rolf at Rolf Bruggink", image: "/image/blog4.png" },
    { title: "Insights of Rolf's Process", image: "/image/blog3.png" },
    { title: "Furniture Store", image: "/image/blog2.png" },
    { title: "Rolf Rolf Bruggink", image: "/image/blog1.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-600 mb-12">
          BLOG
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {blogPosts.map((post, index) => (
            <div key={index}>
            <div
              // key={index}
              className="group relative aspect-square w-full bg-cover bg-center rounded-lg shadow-md"
              style={{ backgroundImage: `url(${post.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-2">
              <h1 className="text-sm sm:text-base md:text-lg font-semibold text-white text-center">
                  {post.title}
                </h1> </div>
              
            </div>
                <h1 className="text-sm  font-semibold text-center">
                  {post.title}
                </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
