import React from 'react';
import { BookOpen, Calculator, Palette, Music, Globe, Gamepad2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BookOpen size={48} />,
      title: 'Reading & Literacy',
      description: 'Engaging reading comprehension worksheets, phonics activities, and literacy games to build strong reading foundations.',
      features: ['Phonics Worksheets', 'Reading Comprehension', 'Sight Words', 'Story Activities']
    },
    {
      icon: <Calculator size={48} />,
      title: 'Math & Numbers',
      description: 'Fun math worksheets and activities that make learning numbers, counting, and basic operations enjoyable for young learners.',
      features: ['Number Recognition', 'Addition & Subtraction', 'Counting Games', 'Math Puzzles']
    },
    {
      icon: <Palette size={48} />,
      title: 'Arts & Crafts',
      description: 'Creative coloring pages, drawing activities, and craft templates that inspire artistic expression and creativity.',
      features: ['Coloring Pages', 'Drawing Guides', 'Craft Templates', 'Art Projects']
    },
    {
      icon: <Music size={48} />,
      title: 'Music & Movement',
      description: 'Interactive music activities, rhythm exercises, and movement games that develop musical skills and coordination.',
      features: ['Rhythm Activities', 'Song Sheets', 'Movement Games', 'Musical Instruments']
    },
    {
      icon: <Globe size={48} />,
      title: 'Science & Nature',
      description: 'Exciting science experiments, nature exploration activities, and STEM projects perfect for curious young minds.',
      features: ['Science Experiments', 'Nature Activities', 'STEM Projects', 'Discovery Games']
    },
    {
      icon: <Gamepad2 size={48} />,
      title: 'Games & Puzzles',
      description: 'Educational games, brain teasers, and puzzles that make learning fun while developing critical thinking skills.',
      features: ['Logic Puzzles', 'Memory Games', 'Brain Teasers', 'Educational Games']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Educational Product Categories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our wide range of digital educational products designed to support learning and development for kindergarten through elementary school students.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-coral/30 hover:-translate-y-2"
            >
              <div className="text-coral mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-sky-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cream to-cream/50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Enhance Learning?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Browse our collection of high-quality educational materials that make teaching and learning more engaging and effective.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-coral text-white px-8 py-4 rounded-full hover:bg-coral/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Shop Products Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;