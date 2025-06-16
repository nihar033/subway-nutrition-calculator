
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Low-Calorie Subway Sandwiches: Your Complete Guide",
      excerpt: "Discover the best low-calorie options at Subway and learn how to customize your order for maximum nutrition with minimal calories.",
      readTime: "5 min read",
      author: "Nutrition Team",
      link: "/blog/low-calorie-subway-sandwiches",
      image: "🥗"
    },
    {
      id: 2,
      title: "Subway Macros Explained: Track Protein, Carbs & Fat",
      excerpt: "Master your macros with our comprehensive guide to tracking protein, carbohydrates, and fat in your Subway meals.",
      readTime: "7 min read",
      author: "Fitness Team",
      link: "/blog/subway-macros-guide",
      image: "📊"
    },
    {
      id: 3,
      title: "Does Subway Have Gluten-Free Bread? (2025 Guide)",
      excerpt: "Complete guide to Subway's gluten-free options, safety concerns, and how to order safely for celiac disease and gluten sensitivity.",
      readTime: "8 min read",
      author: "Health Team",
      link: "/blog/subway-gluten-free-bread",
      image: "🌾"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Subway Nutrition Blog | Tips, Guides & Healthy Meal Ideas</title>
        <meta name="description" content="Discover expert tips, nutrition guides, and healthy meal ideas to make the most of your Subway experience. Read our latest articles on low-calorie options, macros, and gluten-free choices." />
      </Helmet>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-subway-green hover:text-subway-green/80 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Calculator
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                📖 Subway Nutrition Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover expert tips, nutrition guides, and healthy meal ideas to make the most of your Subway experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{post.image}</span>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">Featured</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-900">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link 
                    to={post.link}
                    className="inline-flex items-center text-subway-green font-semibold hover:text-subway-green/80 transition-colors"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              More articles coming soon! Check back regularly for new nutrition tips and healthy eating guides.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
