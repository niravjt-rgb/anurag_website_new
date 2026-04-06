import React from 'react';
import { Card } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_page-showcase-18/artifacts/z4bud4fg_Picture1.jpg"
                alt="Anurag Rastogi"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{data.name}</h3>
                <p className="text-blue-300 text-lg">{data.title}</p>
                <p className="text-slate-300">{data.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
                About
              </h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-4">
                Profile of Excellence
              </h3>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {data.about.intro}
            </p>

            <div className="space-y-4">
              {data.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-slate-700 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Qualifications */}
            <Card className="mt-8 p-6 bg-slate-50 border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">Qualifications</h4>
              <div className="space-y-2">
                {data.qualifications.map((qual, index) => (
                  <p key={index} className="text-slate-700 text-sm">• {qual}</p>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
