import React, { useEffect, useState } from 'react';
import { Bug, Bot, Zap, MessageCircle, Send, Mail, Download, Code, Terminal } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      name: "Bug Ziller V1",
      description: "Advanced bug detection and elimination tool",
      link: "https://www.mediafire.com/file/ofhwjvo002mxr5a/𝐁𝐔𝐆+𝐙𝐈𝐋𝐋𝐄𝐑.zip/file",
      icon: <Bug className="w-6 h-6" />,
      emoji: "🐞"
    },
    {
      name: "AutoBot Pro",
      description: "Next-generation automation framework",
      link: "#",
      icon: <Bot className="w-6 h-6" />,
      emoji: "🤖"
    },
    {
      name: "Tech Utilities Suite",
      description: "Collection of advanced developer tools",
      link: "#",
      icon: <Zap className="w-6 h-6" />,
      emoji: "⚡"
    }
  ];

  const contacts = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      link: "https://wa.me/1234567890",
      color: "hover:text-green-400 hover:shadow-green-400/50"
    },
    {
      name: "Telegram",
      icon: <Send className="w-6 h-6" />,
      link: "https://t.me/mrsmilemodders",
      color: "hover:text-blue-400 hover:shadow-blue-400/50"
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:contact@mrsmilemodders.com",
      color: "hover:text-purple-400 hover:shadow-purple-400/50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Header Section */}
      <header className={`relative z-10 text-center py-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center justify-center mb-6">
          <Terminal className="w-12 h-12 text-green-400 mr-4 animate-pulse" />
          <div className="text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            MR SMILE MODDERS
          </div>
        </div>
        <div className="text-2xl text-green-400 font-mono tracking-wider mb-4 animate-pulse">
          &gt; Automation &amp; Bot Projects
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto animate-pulse"></div>
      </header>

      {/* Bio Section */}
      <section className={`relative z-10 text-center py-8 px-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            Creator of <span className="text-green-400 font-semibold">advanced bug bots</span>, 
            <span className="text-blue-400 font-semibold"> automation tools</span>, and 
            <span className="text-purple-400 font-semibold"> tech utilities</span>.
          </p>
          <div className="mt-4 text-sm text-gray-500 font-mono">
            ~ Mr Smile modders ~
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Code className="inline w-8 h-8 mr-3 text-green-400" />
            Projects Portfolio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${700 + index * 200}ms` }}
              >
                {/* Glow effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-blue-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{project.emoji}</span>
                    <div className="text-green-400 group-hover:text-white transition-colors duration-300">
                      {project.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-400/30"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <MessageCircle className="inline w-8 h-8 mr-3 text-blue-400" />
            Contact Me
          </h2>
          
          <div className="flex justify-center space-x-8">
            {contacts.map((contact, index) => (
              <a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-gray-500 transition-all duration-500 hover:scale-110 hover:shadow-2xl ${contact.color} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${1200 + index * 150}ms` }}
              >
                <div className="mb-3 p-3 bg-gray-700/50 rounded-xl group-hover:bg-gray-600/50 transition-all duration-300 group-hover:shadow-lg">
                  {contact.icon}
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {contact.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 text-center py-12 border-t border-gray-800 transform transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="text-gray-500 font-mono text-sm">
          © 2025 Mr smile modders - All rights reserved
        </div>
        <div className="mt-2 text-xs text-gray-600">
          Crafted with 💚 for the developer community
        </div>
      </footer>
    </div>
  );
}

export default App;
