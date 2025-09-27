import { useState } from 'react';
import { Download, Star } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Reading', 'Math', 'Science', 'Arts & Crafts', 'Games'];

  const projects = [
    {
      id: 1,
      title: 'Alphabet Adventure Pack',
      category: 'Reading',
      description: 'Complete alphabet learning set with tracing, coloring, and recognition activities',
      image: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Kindergarten', 'Letter Recognition', 'Tracing'],
      price: '$12.99',
      rating: 4.9
    },
    {
      id: 2,
      title: 'Numbers 1-20 Workbook',
      category: 'Math',
      description: 'Interactive number learning with counting, writing, and fun math activities',
      image: 'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Grade 1', 'Number Recognition', 'Counting'],
      price: '$9.99',
      rating: 4.8
    },
    {
      id: 3,
      title: 'Animal Kingdom Explorer',
      category: 'Science',
      description: 'Learn about animals with fact sheets, coloring pages, and fun activities',
      image: 'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Grade 2', 'Animals', 'Nature'],
      price: '$14.99',
      rating: 5.0
    },
    {
      id: 4,
      title: 'Creative Coloring Collection',
      category: 'Arts & Crafts',
      description: 'Beautiful coloring pages with educational themes and creative prompts',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['All Ages', 'Creativity', 'Fine Motor'],
      price: '$7.99',
      rating: 4.7
    },
    {
      id: 5,
      title: 'Shape Detective Games',
      category: 'Math',
      description: 'Fun geometry activities teaching shapes, patterns, and spatial reasoning',
      image: 'https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Kindergarten', 'Shapes', 'Patterns'],
      price: '$11.99',
      rating: 4.9
    },
    {
      id: 6,
      title: 'Brain Teaser Bundle',
      category: 'Games',
      description: 'Challenging puzzles and logic games to develop critical thinking skills',
      image: 'https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Grade 3', 'Logic', 'Problem Solving'],
      price: '$16.99',
      rating: 4.8
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular educational products loved by teachers, parents, and students worldwide.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-coral text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-cream dark:hover:bg-gray-600 hover:text-coral'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button className="bg-coral text-white px-4 py-2 rounded-full hover:bg-coral/90 transition-colors text-sm font-semibold">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-coral bg-cream dark:bg-cream/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{project.rating}</span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-coral">{project.price}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-coral text-white py-2 rounded-lg hover:bg-coral/90 transition-colors font-semibold flex items-center justify-center space-x-2">
                  <Download size={18} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-12 space-x-4">
          <button className="bg-coral text-white px-8 py-3 rounded-full hover:bg-coral/90 transition-colors font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;