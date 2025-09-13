import React, { useEffect, useRef, useState } from 'react';
import BlockcastWebsite from '../Components/BlockcastWebsite';
import logo from '../assets/logo.svg';
import glow from '../assets/Glow.png';
import phoneImage from '../assets/Phone-Phone-still.gif';
import aiPoweredSvg from '../assets/AI Powered.svg';
import ultraLowFeesSvg from '../assets/Ultra-Low Fees.svg';
import decentralizedImmutableSvg from '../assets/Decentralized & Immutable.svg';
import realTimeForecastingSvg from '../assets/Real-Time Forecasting.svg';
import safeCompliantSvg from '../assets/Safe & Compliant.svg';
import easyOnboardingSvg from '../assets/Easy Onboarding.svg';

const CombinedLandingPage = () => {
  const canvasRef = useRef(null);
  const [showParticles, setShowParticles] = useState(false);
  const animationRef = useRef();
  const snowflakesRef = useRef([]);

  useEffect(() => {
    // Set showParticles to true after 2 seconds
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Snowfall effect
  useEffect(() => {
    const snowflakes = snowflakesRef.current;
    const snowContainer = document.querySelector('.snow-container');
    
    if (!snowContainer) return;

    // Create snowflakes
    const createSnowflake = () => {
      const snowflake = document.createElement('img');
      snowflake.src = glow;
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.opacity = Math.random() * 0.5 + 0.5;
      snowflake.style.width = `${Math.random() * 10 + 5}px`;
      snowflake.style.height = 'auto';
      snowflake.style.position = 'fixed';
      snowflake.style.top = '-20px';
      snowflake.style.zIndex = '-1'; // Behind all content
      snowflake.style.pointerEvents = 'none';
      snowflake.style.userSelect = 'none';
      
      snowContainer.appendChild(snowflake);
      snowflakes.push({
        element: snowflake,
        x: parseFloat(snowflake.style.left),
        y: -20,
        speed: Math.random() * 2 + 1,
        sway: Math.random() * 1 - 0.5,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAngle: Math.random() * Math.PI * 2
      });
    };

    // Animation loop for snowflakes
    let animationId;
    const animateSnowflakes = () => {
      const containerHeight = window.innerHeight + 20;
      
      for (let i = snowflakes.length - 1; i >= 0; i--) {
        const flake = snowflakes[i];
        flake.y += flake.speed;
        flake.swayAngle += flake.swaySpeed;
        flake.x += flake.sway * Math.sin(flake.swayAngle);
        
        flake.element.style.top = `${flake.y}px`;
        flake.element.style.left = `${flake.x}%`;
        
        // Remove snowflakes that have fallen off screen
        if (flake.y > containerHeight) {
          flake.element.remove();
          snowflakes.splice(i, 1);
        }
      }
      
      // Add new snowflakes randomly
      if (Math.random() < 0.3) {
        createSnowflake();
      }
      
      animationId = requestAnimationFrame(animateSnowflakes);
    };

    // Start animation
    animateSnowflakes();
    
    // Create initial snowflakes
    for (let i = 0; i < 30; i++) {
      setTimeout(() => createSnowflake(), i * 200);
    }
    
    // Clean up
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      snowflakes.forEach(flake => flake.element.remove());
      snowflakes.length = 0;
    };
  }, []);

  useEffect(() => {
    if (!showParticles) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial resize
    resizeCanvas();
    
    // Resize on window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    const particles = [];
    const particleCount = 100;
    
    // Create particles with random properties
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 5, // 10px diameter = 5px radius
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.5 // Opacity between 0.5 and 1.0
      });
    }
    
    // Animation loop
    const animate = () => {
      // Clear canvas completely
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Add some randomness to movement
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;
        
        // Limit velocity to prevent too fast movement
        const maxSpeed = 1.5;
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }
        
        // Bounce off edges
        if (particle.x < particle.radius) {
          particle.x = particle.radius;
          particle.vx = -particle.vx;
        }
        if (particle.x > canvas.width - particle.radius) {
          particle.x = canvas.width - particle.radius;
          particle.vx = -particle.vx;
        }
        if (particle.y < particle.radius) {
          particle.y = particle.radius;
          particle.vy = -particle.vy;
        }
        if (particle.y > canvas.height - particle.radius) {
          particle.y = canvas.height - particle.radius;
          particle.vy = -particle.vy;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `#00419a`;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });
      
      ctx.globalAlpha = 1.0; // Reset global alpha
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showParticles]);

  // Component for the animated circular element with random sizes
  const AnimatedCircle = ({ size = 'medium' }) => {
    const sizeClasses = {
      small: 'w-6 h-6 sm:w-8 sm:h-8',
      medium: 'w-10 h-10 sm:w-12 sm:h-12',
      large: 'w-14 h-14 sm:w-16 sm:h-16'
    };
    
    return (
      <div 
        className={`${sizeClasses[size]} border-2 border-cyan-400 rounded-full mt-10 sm:mt-12`}
        style={{ 
          animation: 'pulse 2.5s infinite',
          position: 'absolute',
          pointerEvents: 'none' // So they don't interfere with user interactions
        }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Snow container - for snowfall effect */}
      <div className="snow-container fixed top-0 left-0 w-full h-full pointer-events-none z-10"></div>
      
      {/* Particle Canvas - Full screen background */}
      {showParticles && (
        <>
          <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full"
            style={{ zIndex: 0 }}
          />
          <style jsx>{`
            @media (max-width: 768px) {
              canvas {
                touch-action: none;
              }
            }
          `}</style>
        </>
      )}

      <div className="relative z-10">
        {/* HTML Content Section (Top) */}
        <section className="bg-black min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section - With phone image */}
            <div className="py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full min-h-screen">
                <div className="md:w-1/2 text-center md:text-right">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-light mb-6">
                    <img src={logo} alt="BlockCast Logo" className="h-[80px] w-auto inline-block" />
                  </h1>
                  
                  <h1 className="text-base sm:text-2xl md:text-[35px] mb-2 sm:mb-3" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
                    AI Powered Truth Verification on <span className="text-[#00d3f3]">HEDERA</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10">
                    Transform collective intelligence into accurate news, data and income with Hedera's enterprise-grade DLT
                  </p>
                </div>
                
                <div className="md:w-1/2 flex justify-center py-2 md:py-4 relative">
                  <img 
                    src={phoneImage} 
                    alt="BlockCast App Preview" 
                    className="max-w-full h-auto rounded-lg shadow-2xl"
                    style={{ transform: 'scale(0.86)', transformOrigin: 'center' }}
                  />
                </div>
              </div>
            </div>

            {/* Problem Section */}
            <div id="problem-section" className="py-4 relative">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">The Misinformation Crisis</h2>
                {/* Removed paragraph */}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-xl font-medium text-cyan-400 mb-4">Global Economic Impact</h3>
                  <p className="text-gray-300">
                    Misinformation is a top global risk costing <span className="text-cyan-400 font-medium">$78 billion</span> annually according to the World Economic Forum.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-xl font-medium text-cyan-400 mb-4">African Media Dependence</h3>
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-medium">400M+ Africans</span> rely on social media for news, which is often centralized and biased.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-xl font-medium text-cyan-400 mb-4">Political Manipulation</h3>
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-medium">$22.7 million</span> was spent on political fake news in Kenya & South Africa alone.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-xl font-medium text-cyan-400 mb-4">Slow Traditional Fact-Checking</h3>
                  <p className="text-gray-300">
                    Traditional fact-checking is centralized, unreliable and slow to respond to viral misinformation.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-xl font-medium text-cyan-400 mb-4">Economic Consequences</h3>
                  <p className="text-gray-300">
                    Disinformation causes market volatility, reduced investment, hindered trade, and increased governance costs.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-xl font-medium text-cyan-400 mb-4">Clickbait Over Truth</h3>
                  <p className="text-gray-300">
                    Viral emotions win clicks while accuracy gets ignored - this is Big Tech's current strategy.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <div className="py-16 relative">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">Our Solution: Hedera-Powered Truth Verification</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <img src={decentralizedImmutableSvg} alt="Decentralized & Immutable" className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Decentralized & Immutable</h3>
                  <p className="text-gray-400">
                    Hedera's aBFT consensus makes every record decentralized, verifiable, and immutable.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <img src={aiPoweredSvg} alt="AI Powered" className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">AI Powered</h3>
                  <p className="text-gray-400">
                    Advanced AI ensures actions are time-stamped, immutable, and auditable with built-in accountability.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <img src={ultraLowFeesSvg} alt="Ultra-Low Fees" className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Ultra-Low Fees</h3>
                  <p className="text-gray-400">
                    Fees as low as ~$0.0001/tx, unaffected by token price swings.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <img src={realTimeForecastingSvg} alt="Real-Time Forecasting" className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Real-Time Forecasting</h3>
                  <p className="text-gray-400">
                    Live evidence submission via HCS topics for instant truth verification.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <img src={safeCompliantSvg} alt="Safe & Compliant" className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Safe & Compliant</h3>
                  <p className="text-gray-400">
                    Decentralized network governed by 39 trusted organizations worldwide.
                  </p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <img src={easyOnboardingSvg} alt="Easy Onboarding" className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Easy Onboarding</h3>
                  <p className="text-gray-400">
                    Seamless social login with Google, Apple, and MetaMask integration.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <div id="how-it-works" className="py-16">
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">How BlockCast Works in 5 Easy Steps</h2>
              </div>
              
              <div className="space-y-8 sm:space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-4 text-cyan-400">Join & Verify</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Sign up instantly with email or social media (Google, Facebook, Twitter)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Complete quick KYC verification - Level 1 is instant</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Level 2 takes under 12 hours and unlocks more features</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Higher verification levels unlock higher limits</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-4 text-cyan-400">Add Funds</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Bank transfer (global coverage)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Mobile money (M-Pesa, MTN, Airtel)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Card payments (Stripe, Flutterwave)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Funds convert instantly to BLCT tokens at transparent rates</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-4 text-cyan-400">Participate in Markets</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Browse truth markets by category (Politics, Economics, Health, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Predict outcomes: Bet BLCT tokens on True or False claims</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Contribute evidence: Submit proof to verify statements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Vote on truth: Your "Truth Score" determines voting weight</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-4 text-cyan-400">Win & Withdraw</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Winning positions automatically convert to BLCT tokens</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Funds appear in your wallet within minutes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Withdraw to bank account or mobile money service</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Track your accuracy score to build reputation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-4 text-cyan-400">Engage & Create</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Create your own truth markets (up to 3/day for Level 1, unlimited for Level 2)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Join the African Truth Community</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Discuss news and events with other members</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">✓</span>
                        <span>Access specialized communities focused on African content</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="py-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">Building a Truthful Information Ecosystem</h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-10">
                With BlockCast, you're not just predicting outcomes—you're building a more truthful information ecosystem, 
                especially for African news and perspectives. Join the fight against misinformation today.
              </p>
            </div>
          </div>
        </section>

        {/* Original Website Content Section (Bottom) - Restored */}
        <section id="original-content" className="bg-black w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="text-center mb-16">
            </div>
            <BlockcastWebsite />
          </div>
        </section>
      </div>
      
      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default CombinedLandingPage;