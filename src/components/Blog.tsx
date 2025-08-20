import type React from "react";

interface BlogPost {
  title: string;
  image: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Inspiring Lighting at Fanuli",
      image: "../../public/image/blog6.png",
    },
    {
      title: "Handcraft and Modern Australian",
      image: "../../public/image/blog5.png",
    },
    {
      title: "Rolf at Rolf Bruggink",
      image: "../../public/image/blog4.png",
    },
    {
      title: "Insights of Rolf's Process",
      image: "../../public/image/blog3.png",
    },
    {
      title: "Furniture Store",
      image: "../../public/image/blog2.png",
    },
    {
      title: "Rolf Rolf Bruggink",
      image: "../../public/image/blog1.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif text-center text-gray-600 mb-12">
          BLOG
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group relative text-center h-44 w-44 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.image})` }}
            >
              <h1 className="absolute hidden inset-0 group-hover:flex items-center justify-center text-xl group-hover:text-white">
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
