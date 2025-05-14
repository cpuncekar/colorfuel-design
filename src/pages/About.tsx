import React from 'react';
import { Palette, Lightbulb, Eye, Layout, Zap, Image } from 'lucide-react';

const DesignTip: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full text-indigo-600">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">About ColorFuel</h1>
          
          <div className="prose prose-lg mx-auto">
            <p>
              Welcome to ColorFuel, your destination for color inspiration. We believe that the right color palette can transform a good design into an exceptional one. Our mission is to provide designers with beautiful, curated color combinations to fuel creativity and inspire great work.
            </p>
            <p>
              Whether you're working on branding, web design, illustrations, or any other creative project, finding the perfect color scheme is essential. ColorFuel makes this process easier by offering a carefully selected collection of color palettes that work harmoniously together.
            </p>
            <p>
              Each palette consists of five complementary colors along with their HEX codes, making it simple to implement them in your designs. Browse through our collection, filter by tags, or search for specific colors to find exactly what you need.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Color Design Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DesignTip 
              icon={<Palette size={24} />}
              title="60-30-10 Rule"
              description="Use your dominant color for 60% of the design, secondary color for 30%, and accent color for 10% to create visual balance."
            />
            <DesignTip 
              icon={<Lightbulb size={24} />}
              title="Consider Color Psychology"
              description="Different colors evoke different emotions. Blues convey trust and calm, reds excite and energize, and greens suggest growth and harmony."
            />
            <DesignTip 
              icon={<Eye size={24} />}
              title="Ensure Sufficient Contrast"
              description="Maintain adequate contrast between text and background colors to keep content readable and accessible to all users."
            />
            <DesignTip 
              icon={<Layout size={24} />}
              title="Create a Color System"
              description="Develop a consistent color system with primary, secondary, and accent colors, plus neutral tones with multiple shades of each."
            />
            <DesignTip 
              icon={<Zap size={24} />}
              title="Use Color to Guide Attention"
              description="Direct users' focus by using brighter or contrasting colors for important elements and calls to action."
            />
            <DesignTip 
              icon={<Image size={24} />}
              title="Consider Environment"
              description="Account for how colors will appear across different devices, lighting conditions, and contexts when finalizing your palette."
            />
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to find your perfect palette?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our collection and discover the colors that will bring your next design to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;