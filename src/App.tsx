import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { PricingTier } from './components/PricingTier';
import { CaseStudy } from './components/CaseStudy';
import { Gallery } from './components/Gallery';

const services = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Architectural Capture",
    description: "High-fidelity spatial documentation with unprecedented detail and accuracy"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Commercial Spaces",
    description: "Complete interior visualization for retail, offices, and industrial facilities"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Real-time Rendering",
    description: "Advanced on-site processing using our proprietary Radiance Fields technology"
  }
];

const pricingTiers = [
  {
    name: "Essential",
    price: "2,999",
    features: [
      "Up to 5,000 sq ft coverage",
      "48-hour delivery",
      "Basic post-processing",
      "Web viewer access",
      "1-month cloud storage"
    ]
  },
  {
    name: "Professional",
    price: "4,999",
    features: [
      "Up to 10,000 sq ft coverage",
      "24-hour delivery",
      "Advanced post-processing",
      "Web viewer with annotations",
      "3-month cloud storage",
      "Technical support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited coverage",
      "Priority processing",
      "Custom post-processing",
      "Advanced viewer features",
      "1-year cloud storage",
      "24/7 dedicated support"
    ]
  }
];

const caseStudies = [
  {
    title: "Historic Opera House",
    description: "Complete architectural documentation for renovation planning",
    image: "https://images.unsplash.com/photo-1581005637967-c0c0aaf12198?auto=format&fit=crop&q=80",
    metrics: {
      area: "25,000 sq ft",
      duration: "3 days",
      accuracy: "±2mm"
    }
  },
  {
    title: "Modern Office Complex",
    description: "Digital twin creation for facility management",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    metrics: {
      area: "50,000 sq ft",
      duration: "5 days",
      accuracy: "±1mm"
    }
  }
];

export function App() {
  return (
    <div className="bg-sand-50 min-h-screen">
      <Navbar />
      <Hero />
      
      <section id="services" className="container mx-auto px-4 py-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-sand-600"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </section>

      <section id="case-studies" className="py-32 bg-sand-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-sand-600"
          >
            Case Studies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudy key={index} {...study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      <section id="pricing" className="py-32 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-sand-600"
        >
          Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} index={index} />
          ))}
        </div>
      </section>

      <footer className="bg-sand-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Building2 className="w-6 h-6 text-bronze-500" />
              <Briefcase className="w-6 h-6 text-bronze-500" />
              <Sparkles className="w-6 h-6 text-bronze-500" />
            </div>
            <p className="text-sand-600/80">&copy; 2024 Apollo Radiance Fields. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;