import React from 'react';
import { Github, Twitch, Youtube, Mail, Menu, X, TowerControl as GameController } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-red-500 flex items-center gap-2">
            <GameController size={24} />
            Tim Reckner
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white font-medium">About</a>
            <a href="#gaming" className="text-gray-300 hover:text-white font-medium">Gaming</a>
            <a href="#schedule" className="text-gray-300 hover:text-white font-medium">Schedule</a>
            <a href="#contact" className="text-gray-300 hover:text-white font-medium">Contact</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <a href="#about" className="text-gray-300 hover:text-white font-medium py-2" onClick={toggleMobileMenu}>About</a>
              <a href="#gaming" className="text-gray-300 hover:text-white font-medium py-2" onClick={toggleMobileMenu}>Gaming</a>
              <a href="#schedule" className="text-gray-300 hover:text-white font-medium py-2" onClick={toggleMobileMenu}>Schedule</a>
              <a href="#contact" className="text-gray-300 hover:text-white font-medium py-2" onClick={toggleMobileMenu}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tim Reckner</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-red-500 mb-6">Gaming Content Creator</h2>
            <p className="text-lg text-gray-300 mb-8">
              Bringing you the latest Jailbreak news, strategies, and entertainment. Join me for exciting gameplay and community events!
            </p>
            <div className="flex space-x-4">
              <a href="#gaming" className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors">
                Watch Now
              </a>
              <a href="#schedule" className="px-6 py-3 border border-red-600 text-red-500 font-medium rounded-md hover:bg-red-900/20 transition-colors">
                View Schedule
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center">
              <GameController size={100} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Hey gamers! I'm Tim, a passionate gaming content creator focused on bringing you the best Jailbreak content. With years of experience in the game, I share strategies, updates, and entertaining gameplay that helps you level up your skills.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I started my journey in gaming content creation to build a community where players can learn, share, and have fun together. Whether you're a beginner or a pro, my channel has something for everyone.
            </p>
            <p className="text-lg text-gray-300">
              Join me for live streams, tutorials, and special events where we can interact, play together, and make gaming more enjoyable for everyone!
            </p>
          </div>
        </div>
      </section>

      {/* Gaming Content Section */}
      <section id="gaming" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Featured Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Content 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Latest Update Review</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Jailbreak 2024 Update</h3>
                <p className="text-gray-300 mb-4">
                  Complete walkthrough of the newest features, vehicles, and strategies in the latest Jailbreak update.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Gameplay</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Tutorial</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Tips</span>
                </div>
                <a href="#" className="text-red-500 font-medium hover:text-red-400">Watch Video →</a>
              </div>
            </div>
            
            {/* Content 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Strategy Guide</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Pro Tips & Tricks</h3>
                <p className="text-gray-300 mb-4">
                  Advanced strategies and secret techniques to help you become a better Jailbreak player.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Strategy</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Advanced</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Guide</span>
                </div>
                <a href="#" className="text-red-500 font-medium hover:text-red-400">Watch Video →</a>
              </div>
            </div>
            
            {/* Content 3 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Community Event</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Live Events & Challenges</h3>
                <p className="text-gray-300 mb-4">
                  Join our community events, competitions, and challenges with exciting prizes and rewards.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Events</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Community</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Live</span>
                </div>
                <a href="#" className="text-red-500 font-medium hover:text-red-400">Join Now →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Stream Schedule</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Weekly Schedule */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">Weekly Streams</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monday</span>
                  <span className="text-red-500">8:00 PM PST - Strategy Guide</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Wednesday</span>
                  <span className="text-red-500">7:00 PM PST - Community Play</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-red-500">10:00 AM PST - Update Reviews</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-red-500">2:00 PM PST - Special Events</span>
                </div>
              </div>
            </div>
            
            {/* Special Events */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-white font-bold">Jailbreak Rewind 2024</h4>
                  <p className="text-gray-300">Saturday, 10:00 AM PST</p>
                  <p className="text-gray-400 text-sm">Live event featuring the best moments and updates</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-bold">Community Tournament</h4>
                  <p className="text-gray-300">Coming Soon</p>
                  <p className="text-gray-400 text-sm">Compete with other players for exclusive prizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Connect With Me</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Social Media</h3>
              <div className="space-y-6">
                <a href="#" className="flex items-center text-gray-300 hover:text-red-500 transition-colors">
                  <Youtube className="mr-4" size={24} />
                  <span>YouTube Channel</span>
                </a>
                <a href="#" className="flex items-center text-gray-300 hover:text-red-500 transition-colors">
                  <Twitch className="mr-4" size={24} />
                  <span>Twitch Stream</span>
                </a>
                <a href="#" className="flex items-center text-gray-300 hover:text-red-500 transition-colors">
                  <Github className="mr-4" size={24} />
                  <span>GitHub Projects</span>
                </a>
                <a href="#" className="flex items-center text-gray-300 hover:text-red-500 transition-colors">
                  <Mail className="mr-4" size={24} />
                  <span>Contact Email</span>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Get Updates</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-red-600 text-white font-medium py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-bold text-white">Tim Reckner</p>
              <p className="text-gray-400">Gaming Content Creator</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitch size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Tim Reckner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;