
import React from 'react';

const IdeaAndTipsComponent = () => {
  const categories = [
    {
      id: 0,
      title: 'Planning Basics',
      image: '/src/assets/smallimg2/smallplan.png', 
    },
    
    {
      id: 1,
      title: 'Wedding Ceremony',
      image: '/src/assets/smallimg2/planningsmall.png',
    },
    {
      id: 2,
      title: 'Wedding Reception',
      image: '/src/assets/smallimg2/smallcake.png',    },
    {
      id: 3,
      title: 'Wedding Services',
      image: '/src/assets/smallimg2/smallservice.png',    },
    {
      id: 4,
      title: 'Wedding Fashion',
      image: '/src/assets/smallimg2/smalldress2.png',    },
    {
      id: 5,
      title: 'Hair & Makeup',
      image: '/src/assets/smallimg2/smallmakeup.png',     },
  ];

  const articles = [
    {
      id: 0,
      title: '31 Beautiful Dresses to Wear to Your Next Summer Wedding',
      preTitle: 'WEDDING GUESTS',
      image: 'https://cdn0.weddingwire.com/article/9944/3_2/960/jpg/24499-summer-wedding-guest-dress-hero.webp',
    },
    {
      id: 1,
      title: '23 Super-Chic Blazer Dresses for Your Wedding Day and More',
      preTitle: 'BRIDE & BRIDESMAIDS',
      image: 'https://cdn0.weddingwire.com/article/9734/3_2/960/jpg/24379-blazer-dress-lead-image.webp',
    },
    {
      id: 2,
      title: 'The Prettiest Floral Bridal Earrings for a Garden-Chic Look',
      preTitle: 'RINGS & JEWELRY',
      image: 'https://cdn0.weddingwire.com/article/3334/3_2/960/jpg/24333-floral-bridal-earrings-main.webp',
    },
    {
      id: 3,
      title: '24 Honeymoon Dresses for Your First Newlywed Vacay',
      preTitle: 'HONEYMOON ADVICE',
      image: 'https://cdn0.weddingwire.com/article/1334/3_2/960/jpg/24331-honeymoon-dress-ww.webp',
    },
  ];
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Ideas and tips</h2>
        <p className="text-gray-600 mb-8">
          Draw inspiration from fresh trends and advice from our wedding experts.
        </p>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-8 ">
          {categories.map((category) => (
            <div key={category.id} className="text-center  transition-transform transform hover:scale-105 duration-300">
              <img
                src={category.image}
                alt={category.title}
                className="rounded-full mx-auto mb-2 w-12 h-12 "
              />
              <p className="text-sm font-semibold">{category.title}</p>
              </div>
           ))}
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article) => (
            <div key={article.id} className="text-center hover:shadow-2xl transition-transform transform hover:scale-105 rounded-2xl  duration-300 pb-4">
              <img
                src={article.image}
                alt={article.title}
                className="rounded-lg mb-2 w-full"
              />
              <p className="text-sm font-semibold text-gray-500">
                {article.preTitle}
              </p>
              <p className="text-base font-bold">{article.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdeaAndTipsComponent;