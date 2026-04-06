import React from 'react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Building2, Briefcase, Users, Award, FileText } from 'lucide-react';

const Experience = ({ data }) => {
  const committees = {
    iai: [
      "Current Member of the Managing Council, Vice President, Chairperson of Education Committee and Disciplinary Committee",
      "Ex Member of the National Disaster Management Authority (Government of India) Committee on Comprehensive Multi-hazard Risk Financing Strategy as a representative of Institute of Actuaries of India",
      "Chairperson 23rd and 22nd Global Conference of Actuaries Organizing Group, India in 2023 and 2024",
      "Ex Member, Institute of Actuaries of India Task Force on 'Increasing Insurance Penetration in India'"
    ],
    irdai: [
      "Member of the Joint Expert Group created by IRDAI for implementation of IndAS in Indian Insurance Industry",
      "Chairperson of IRDAI Working Group on Linking Motor Insurance Premium with Traffic Violations",
      "Chairperson of IRDAI Working Group on Product Structure for Dwelling, Offices, Hotels, Shops etc and MSME for cover against Fire & Allied Perils",
      "Chairperson of IRDAI Committee on Discount Structure for policies issued only in Electronic format",
      "Member IRDAI sub-committee on Risk Based Capital for General Insurers",
      "Member and Subject Matter Expert of IRDAI Committee on Review of Regulations for General and Health Insurance",
      "Member of IRDAI Working Group to Review File & Use Guidelines for General Insurance Products",
      "Member of IRDAI Committee for Operationalization of Declined Risk Pool",
      "Member of IRDAI Committee to Peer Review the Ultimate Loss Estimation of Declined Risk Pool by Pool Actuary for Financial Year 2013-2014 & 2014-15"
    ],
    iibi: [
      "Member of IIB Loss Cost Committee for Property Insurance for Year 2017 onwards"
    ]
  };

  const publications = [
    "'Adoption of Risk Based Capital in Insurance Industry', published in India Insurance Report – Transforming Indian Insurance by Birla Institute of Management Technology (BIMTECH), India in 2023",
    "'Reserving for Premium Deficiency Reserve' submitted in GIRO workshop of IFOA in Sorrento, Italy in 2008",
    "'Premium Reserving in General Insurance' in IRDA journal in April 2008",
    "'Non-Life Pricing Juggernaut' published in IRDA journal in Sep 2006",
    "'IBNR Estimation for General Insurers – A Case Study', published in Bima Quest by National Insurance Academy, Pune, India in July 2003",
    "'Insurance Penetration in Rural India: A Case Study for Non-Life' published in FORTE insurance journal of FICCI-ING Insurance in Jan 2003"
  ];

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
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="companies" className="text-sm">
              <Building2 className="h-4 w-4 mr-2" />
              Companies
            </TabsTrigger>
            <TabsTrigger value="roles" className="text-sm">
              <Briefcase className="h-4 w-4 mr-2" />
              Roles
            </TabsTrigger>
            <TabsTrigger value="committees" className="text-sm">
              <Users className="h-4 w-4 mr-2" />
              Committees
            </TabsTrigger>
            <TabsTrigger value="publications" className="text-sm">
              <FileText className="h-4 w-4 mr-2" />
              Publications
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
            <div className="space-y-8">
              {/* IAI */}
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Institute of Actuaries of India
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 italic mb-4">
                    (A Statutory body created by an Act of Parliament, Government of India)
                  </p>
                  <ul className="space-y-3">
                    {committees.iai.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-slate-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* IRDAI */}
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Insurance Regulatory & Development Authority of India (IRDAI)
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {committees.irdai.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-slate-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* IIBI */}
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">
                      Insurance Information Bureau of India (IIBI)
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {committees.iibi.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-slate-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Publications */}
          <TabsContent value="publications">
            <Card className="border-slate-200 max-w-5xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Papers & Articles Published
                  </h4>
                </div>
                <ul className="space-y-4">
                  {publications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0 font-bold">{index + 1}.</span>
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* M&A and Industry Contributions - One Below Other */}
        <div className="mt-16 space-y-6 max-w-5xl mx-auto">
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-8">
              <h4 className="font-semibold text-slate-900 mb-3 text-lg">M&A Expertise</h4>
              <p className="text-slate-700 leading-relaxed">
                Led underwriting, claims and actuarial workstreams in two M&A deals from 
                due diligence through acquisition, merger, and integration into the acquiring company.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-8">
              <h4 className="font-semibold text-slate-900 mb-3 text-lg">Industry Contributions</h4>
              <p className="text-slate-700 leading-relaxed">
                Chaired and member of several committees of Indian Insurance Regulator, regular speaker at insurance 
                seminars and conferences. Published papers in India and internationally. Active mentor to young 
                actuaries and startups.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
