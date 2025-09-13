import React from 'react';

const LandingPage = () => {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <div className="inline-block bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-cyan-400 text-sm font-medium">🔗 Track: AI & DePIN | Sub-track: AI Agents on Hedera</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            🚀 <span className="text-cyan-400">BlockCast</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI Powered Truth Verification on Hedera
          </p>
          
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Transform collective intelligence into accurate news, data and income with Hedera's enterprise-grade DLT
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <span className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 text-sm">🔒 Decentralized & Immutable</span>
            <span className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 text-sm">🤖 AI Powered Verification</span>
            <span className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 text-sm">💰 Ultra-Low Fees (~$0.0001/tx)</span>
            <span className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 text-sm">⚡ Real-Time Evidence</span>
            <span className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 text-sm">🛡️ Enterprise-Grade Security</span>
            <span className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 text-sm">📱 Easy Crypto Onboarding</span>
          </div>
          
          <a 
            href="#how-it-works" 
            className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Start Fighting Misinformation
          </a>
        </section>

        {/* Problem Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">The Misinformation Crisis</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Misinformation is not just a media problem, it is a community crisis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
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
        </section>

        {/* Solution Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Our Solution: Hedera-Powered Truth Verification</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Decentralized & Immutable</h3>
              <p className="text-gray-400">
                Hedera's aBFT consensus makes every record decentralized, verifiable, and immutable.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-medium mb-4">AI Powered</h3>
              <p className="text-gray-400">
                Advanced AI ensures actions are time-stamped, immutable, and auditable with built-in accountability.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Ultra-Low Fees</h3>
              <p className="text-gray-400">
                Fees as low as ~$0.0001/tx, unaffected by token price swings.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Real-Time Forecasting</h3>
              <p className="text-gray-400">
                Live evidence submission via HCS topics for instant truth verification.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Safe & Compliant</h3>
              <p className="text-gray-400">
                Decentralized network governed by 39 trusted organizations worldwide.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Easy Onboarding</h3>
              <p className="text-gray-400">
                Seamless social login with Google, Apple, and MetaMask integration.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">How BlockCast Works in 5 Easy Steps</h2>
          </div>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
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
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
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
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
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
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
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
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-400/30 transition-all duration-300">
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
        </section>

        {/* Footer Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Building a Truthful Information Ecosystem</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            With BlockCast, you're not just predicting outcomes—you're building a more truthful information ecosystem, 
            especially for African news and perspectives. Join the fight against misinformation today.
          </p>
          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </a>
        </section>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;