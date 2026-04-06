import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Calculator, ShieldCheck, FileCheck, TrendingUp } from 'lucide-react';

const iconMap = {
  'calculator': Calculator,
  'shield-check': ShieldCheck,
  'file-check': FileCheck,
  'trending-up': TrendingUp
};

const Services = ({ data }) => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Insurance Consulting
          </h3>
          <p className="text-xl text-slate-600">
            Expert advisory across the entire general and health insurance value chain
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.services.map((service) => {
            const Icon = iconMap[service.icon];
            
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-300 bg-white"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900">
                      {service.category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-slate-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-slate-900 mb-3">
                Need Specialized Advisory?
              </h4>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Whether you're looking for market entry strategies, M&A advisory, or technical actuarial support, 
                I provide tailored solutions for your unique challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
