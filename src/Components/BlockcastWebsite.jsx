import React, { useState, useEffect } from 'react';

import logo from '../assets/logo.svg';

const BlockcastWebsite = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [particles, setParticles] = useState([]);


  // Create floating particles
  useEffect(() => {
    const createParticle = () => {
      const particle = {
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 20 + Math.random() * 10
      };
      
      setParticles(prev => [...prev, particle]);
      
      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== particle.id));
      }, (particle.duration + particle.delay) * 1000);
    };

    // Initial particles
    for (let i = 0; i < 8; i++) {
      setTimeout(createParticle, i * 500);
    }

    // Create particles periodically
    const interval = setInterval(createParticle, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    if (email.trim() && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Grid Background */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 150, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 150, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 25s linear infinite'
        }}
      />

      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-[3px] h-[3px] bg-blue-400 rounded-full opacity-40 pointer-events-none"
          style={{
            left: `${particle.left}vw`,
            animation: `float ${particle.duration}s ${particle.delay}s linear infinite`
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-10 relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-8">
          <div className="text-cyan-400 text-sm font-semibold tracking-widest uppercase flex items-center justify-center">
            <img className='w-[250px] r' src={logo} alt="logo" />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-between gap-20 pt-10 flex-col lg:flex-row">
          {/* Left Section */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="mb-12">
              <h1 className="text-8xl font-light leading-none mb-8 tracking-tight">
                The Future's<br />
                <span className="text-cyan-400">Whispering...</span>
              </h1>
              <div className="text-3xl text-[#fff] font-light mb-12 tracking-tight lg:border-1-purple-100 lg:border-l-2 pl-4">
                <span>Are You Listening?</span>
                <div className='mt-4'>
                  <span className='bg-cyan-400 px-3 text-[#000] rounded-md mr-[10px] text-[20px]'>Yes</span>
                  <span className='bg-purple-300 rounded-md text-[#000] px-3 text-[20px]'>No</span>
                </div>
              </div>
            </div>
            
            <div className="text-gray-500 text-lg leading-relaxed mb-3 font-normal">
             
              Future predictions meet blockchain truth validation across Africa.
            </div>
            
            <div className="text-gray-500 text-lg leading-relaxed font-normal ">
              Where collective intelligence shapes today's reality.
            </div>

            {/* Pulsing Circle */}
            <div 
              className="w-12 h-12 border-2 border-cyan-400 rounded-full mt-12"
              style={{
                animation: 'pulse 2.5s infinite'
              }}
            />
          </div>

          {/* Right Section - Join Form */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 text-center flex items-center justify-center gap-2">
              <span>•</span>
              EARLY ACCESS
              <span>•</span>
            </div>
            
            <h2 className="text-3xl font-normal mb-4 text-center tracking-tight">
              Join the Network
            </h2>
            
            <p className="text-gray-400 text-center mb-8 leading-relaxed text-sm font-normal">
              Be part of a future powered by information validation and prediction.
            </p>
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="your.email@domain.com"
              className="w-full px-5 py-4 bg-black bg-opacity-40 border border-white/30 rounded-xl text-white text-sm mb-5 focus:outline-none focus:border-cyan-400 focus:bg-opacity-60 transition-all duration-300 placeholder-gray-600"
            />
            
            <button
              onClick={handleSubmit}
              className={`w-full bg-gradient-to-r from-sky-400 to-purple-500 hover:from-sky-500 hover:to-purple-600 cursor-pointer text-white h-14 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                isSubmitted 
                  ? 'bg-gradient-to-r from-green-400 to-cyan-400' 
                  : 'bg-gradient-to-r from-cyan-400 to-purple-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/25'
              }`}
            >
              {isSubmitted ? 'JOINED!' : 'NOTIFY ME'}
            </button>

        </div>
         {/* Feature Pillars */}
         <div className="flex justify-center gap-32 mt-20 mb-16">
          <div className="text-center">
            <div className="text-lg font-semibold mb-2 tracking-wide text-cyan-400">PREDICTIONS</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest font-medium">FUTURE OUTCOMES</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold mb-2 tracking-wide text-purple-600">TRUTH</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest font-medium">VALIDATION</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold mb-2 tracking-wide text-gray-300">CULTURE</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest font-medium">POWERED</div>
          </div>
        </div>
          </div>
        </main>

       
       

        {/* Footer */}
        <div className="flex flex-col items-center gap-4 pb-10">
          <div className="text-gray-500 text-md font-normal">
            Built for the culture. Powered by blockchain.
          </div>
          <div className="flex gap-6 text-sm">
            {/* <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 font-normal">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 font-normal">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 font-normal">
              Contact
            </a> */}
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        @keyframes float {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.6; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          h1 {
            font-size: 4.5rem;
          }
        }

        @media (max-width: 768px) {
          .main-content {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
          }
          
          h1 {
            font-size: 3.5rem;
          }
          
          .feature-pillars {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BlockcastWebsite;