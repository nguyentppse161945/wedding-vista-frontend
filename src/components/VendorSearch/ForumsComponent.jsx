import React from 'react';

const ForumsComponent = () => {
  const forumData = [
    {
      title: 'Sending invites too early?',
      description: 'We sent our STDs in March and our wedding is in November 2024. 75% of our guest list are from out of state so we wanted...',
      author: 'Ashlyn',
      date: 'on May 23, 2024 at 3:57 PM',
      avatar: 'https://cdn0.weddingwire.com/user/1216/1_1/80/jpg/gu_41516121.jpeg?r=61292',
    },
    {
      title: 'Wedding Hashtag',
      description: 'Hey yall! Looking for some help with a hashtag for our wedding. My last name is Jones, my FH last name is Kirschbaum....',
      author: 'Kelsey',
      date: 'on May 22, 2024 at 9:57 PM',
      avatar: 'https://cdn0.weddingwire.com/user/7407/1_1/80/jpg/gu_42367047.jpeg?r=70014',
    },
    {
        title: 'Wedding Hashtag',
        description: 'I am the brides sister-in-law, and I am a bridesmaid. I offered to host the wedding shower. I am fully expecting to do...',
        author: 'Sierra Brown',
        date: 'on May 22, 2024 at 9:57 PM',
        avatar: 'https://cdn0.weddingwire.com/user/5956/1_1/80/jpg/gu_42416595.webp?r=58048',
      },
      {
        title: 'Wedding Hashtag',
        description: 'I am horrible at creating anything with names and being creative. So any ideas for a catchy hashtag I will appreciate....',
        author: 'Riley',
        date: 'on May 22, 2024 at 9:57 PM',
        avatar: 'https://cdn0.weddingwire.com/user/5666/1_1/80/jpg/gu_42416665.webp?r=23494',
      },
      
      
    // Add more forum data here
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Forums</h2>
        <p className="mt-2 text-lg text-gray-600">Ask questions and get answers with support from other engaged couples.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {forumData.map((forum, index) => (
            <div key={index} className="bg-white   shadow-md overflow-hidden  hover:shadow-2xl transition-transform transform hover:scale-105 rounded-2xl  duration-300 ">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">{forum.title}</h3>
                <p className="mt-2 text-gray-600">{forum.description}</p>
              </div>
              <div className="px-6 py-4 bg-gray-100 flex items-center">
                <img className="w-8 h-8 rounded-full mr-3" src={forum.avatar} alt={forum.author} />
                <div>
                  <p className="text-sm font-medium text-gray-900">{forum.author}</p>
                  <p className="text-sm text-gray-600">{forum.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumsComponent;