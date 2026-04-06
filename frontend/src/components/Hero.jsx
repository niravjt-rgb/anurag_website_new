import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = ({ data, onContactClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1769839271768-aee5469799ee"
          alt="Professional consulting"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="mb-6 animate-fade-in">
            <p className="text-blue-400 font-bold text-3xl mb-3">
              Anurag Rastogi, FIAI, FIII
            </p>
            <p className="text-slate-300 font-medium text-lg mb-4">
              General Insurance Consultant, Actuary
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {data.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Leveraging 37 years of actuarial and underwriting expertise to drive profitability with growth in P&C Insurance sector
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-delay">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={onContactClick}
            >
              {data.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg transition-all duration-300"
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-16 pt-12 border-t border-slate-700">
            <div className="animate-fade-in-delay-2">
              <p className="text-4xl font-bold text-blue-400">{data.yearsOfExperience}+</p>
              <p className="text-slate-400 mt-1">Years Experience</p>
            </div>
            <div className="animate-fade-in-delay-2">
              <p className="text-4xl font-bold text-blue-400">360°</p>
              <p className="text-slate-400 mt-1">Experience Across Insurance Value Chain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
