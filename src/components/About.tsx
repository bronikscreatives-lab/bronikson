import React from 'react';
import { Award, Users, Heart, Target, BookOpen, Smile } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award size={40} />,
      title: 'Quality',
      description: 'Every product is carefully designed and tested to ensure the highest educational value.'
    },
    {
      icon: <Users size={40} />,
      title: 'Teacher-Approved',
      description: 'Created by educators for educators, with input from classroom teachers and parents.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Fun Learning',
      description: 'We believe learning should be enjoyable and engaging for every child.'
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Educational',
      description: 'All products align with curriculum standards and support developmental milestones.'
    }
  ];


  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Broniks Educational
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're passionate educators and designers dedicated to creating high-quality digital learning materials that make education fun, engaging, and effective for young learners.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Founded by a team of experienced educators and creative professionals, 
                Broniks Educational was born from a simple observation: children learn best 
                when they're having fun and actively engaged in the learning process.
              </p>
              <p>
                Starting in a small classroom where our founder noticed the lack of engaging, 
                high-quality educational materials, we set out to create resources that would 
                spark curiosity and make learning an adventure for every child.
              </p>
              <p>
                Today, our products are used by thousands of teachers and parents worldwide, 
                helping children develop essential skills while having fun. Every product is 
                carefully crafted with input from educators and tested in real classrooms.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Children learning"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-coral text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm">Happy Students Learning</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">What We Believe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-coral mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;