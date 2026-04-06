import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{data.name}</h3>
            <p className="text-slate-400 text-sm mb-2">{data.title}</p>
            <p className="text-slate-400 text-sm">{data.subtitle}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${data.email}`} 
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                {data.email}
              </a>
            </div>
          </div>
        </div>

        {/* Professional Affiliations */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <h4 className="font-semibold mb-4 text-center">Professional Affiliations</h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span>Institute of Actuaries of India</span>
            <span className="hidden sm:inline">•</span>
            <span>Insurance Institute of India</span>
            <span className="hidden sm:inline">•</span>
            <span>Deloitte, India</span>
            <span className="hidden sm:inline">•</span>
            <span>International Actuarial Association</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} {data.name}. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            General Insurance Consultant | Actuary | Senior Advisor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
