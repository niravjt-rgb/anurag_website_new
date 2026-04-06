import React from 'react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Building2, Briefcase, Users } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
            Experience & Recognition
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Proven Track Record
          </h3>
          <p className="text-xl text-slate-600">
            Extensive experience with India's leading insurance companies and regulatory bodies
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="companies" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="companies" className="text-base">
              <Building2 className="h-4 w-4 mr-2" />
              Companies
            </TabsTrigger>
            <TabsTrigger value="roles" className="text-base">
              <Briefcase className="h-4 w-4 mr-2" />
              Key Roles
            </TabsTrigger>
            <TabsTrigger value="committees" className="text-base">
              <Users className="h-4 w-4 mr-2" />
              Committees
            </TabsTrigger>
          </TabsList>

          {/* Companies */}
          <TabsContent value="companies">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.experience.companies.map((company, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-blue-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded group-hover:bg-blue-600 transition-colors duration-300">
                        <Building2 className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-slate-800 font-medium leading-snug">{company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Roles */}
          <TabsContent value="roles">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {data.experience.roles.map((role, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-blue-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded group-hover:bg-blue-600 transition-colors duration-300">
                        <Briefcase className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-slate-800 font-medium leading-snug">{role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Committees */}
          <TabsContent value="committees">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {data.experience.committees.map((committee, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-blue-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded group-hover:bg-blue-600 transition-colors duration-300">
                        <Users className="h-5 w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="text-slate-800 font-medium leading-snug">{committee}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Info */}
        <Card className="mt-12 bg-slate-50 border-slate-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 text-lg">M&A Expertise</h4>
                <p className="text-slate-700 leading-relaxed">
                  Led underwriting, claims and actuarial workstreams in two M&A deals from 
                  due diligence through acquisition, merger, and integration into the acquiring company.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 text-lg">Industry Contributions</h4>
                <p className="text-slate-700 leading-relaxed">
                  Regular speaker at insurance seminars and conferences. Published papers in India 
                  and internationally. Active mentor to young actuaries and startups.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
