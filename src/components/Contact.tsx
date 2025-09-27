import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send to Brevo API
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': import.meta.env.VITE_BREVO_API_KEY, // You'll need to add this to your .env file
        },
        body: JSON.stringify({
          sender: {
            name: formData.name,
            email: formData.email,
          },
          to: [
            {
              email: 'your-email@example.com', // Replace with your actual email
              name: 'Broniks Educational',
            },
          ],
          subject: `Contact Form: ${formData.subject || 'General Inquiry'}`,
          htmlContent: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject || 'General Inquiry'}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          `,
          textContent: `
            New Contact Form Submission
            
            Name: ${formData.name}
            Email: ${formData.email}
            Subject: ${formData.subject || 'General Inquiry'}
            Message: ${formData.message}
          `,
        }),
      });

      if (response.ok) {
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Thank you for your message! We\'ll get back to you soon.');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our products? Need custom educational materials? We'd love to hear from you and help make learning more engaging for your students.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-cream dark:bg-cream/20 p-3 rounded-lg">
                  <Mail className="text-coral" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Support</h4>
                  <p className="text-gray-600 dark:text-gray-300">bronikscreatives@gmail.com</p>                  
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cream dark:bg-cream/20 p-3 rounded-lg">
                  <MapPin className="text-coral" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Office</h4>
                  <p className="text-gray-600 dark:text-gray-300">Blk 5, Lot 12, Orchid Street</p>
                  <p className="text-gray-600 dark:text-gray-300">Barangay Buhangin Davao City, Davao del Sur</p>
                  <p className="text-gray-600 dark:text-gray-300">8000 Philippines</p>

                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-cream dark:bg-cream/20 p-3 rounded-lg">
                  <Clock className="text-coral" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Support Hours</h4>
                  <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 dark:text-gray-300">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent"
                >
                  <option value="">Select inquiry type</option>
                  <option value="product-question">Product Question</option>
                  <option value="custom-request">Custom Product Request</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-vertical"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-coral text-white px-8 py-4 rounded-lg hover:bg-coral/90 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;