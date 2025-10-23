'use client';

import { menuData, menuNotes, baseOptions, headerInfo } from '@/data/menu';
import { Leaf, Crown } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: "תפריט שייקים | Green Bar Haifa",
  description: "תפריט שייקים מלא עם שייקים קלאסיים, שייקים ירוקים ושייקים PRO. מעל 15 שנות מוניטין.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir="rtl">
      {/* Header Section */}
      <section className="relative py-16 px-6 bg-gradient-to-r from-green-600 to-green-500">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Leaf className="w-12 h-12" />
              <Crown className="w-8 h-8" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              תפריט שייקים
            </h1>
            <p className="font-body text-xl md:text-2xl opacity-95">
              {headerInfo.reputation}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section - Product Images */}
      <section className="py-8 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/context/images/unnamed_(5).jpg"
                alt="שייק ירוק"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/context/images/unnamed_(4).jpg"
                alt="שייק אדום"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/context/images/unnamed_(3).jpg"
                alt="קערת אסאי"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/context/images/unnamed_(2).jpg"
                alt="קערת פירות"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/context/images/unnamed_(1).jpg"
                alt="קערות אסאי"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/context/images/unnamed.jpg"
                alt="קערת גרנולה"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            {menuData.map((section, sectionIdx) => (
              <div key={sectionIdx} className="space-y-6">
                {/* Section Header */}
                <div className={`menu-section-header ${section.isPro ? 'pro' : ''}`}>
                  {section.isPro ? (
                    <Crown className="w-6 h-6" />
                  ) : (
                    <Leaf className="w-6 h-6" />
                  )}
                  <h2 className="font-heading text-2xl md:text-3xl">
                    {section.title}
                  </h2>
                </div>

                {/* Size Options */}
                {section.sizes && (
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {section.sizes.map((size, idx) => (
                      <div key={idx} className="price-badge">
                        {size}
                      </div>
                    ))}
                  </div>
                )}

                {/* Menu Items Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="smoothie-card p-6 relative overflow-hidden"
                    >
                      {/* Addon Badge */}
                      {item.addon && (
                        <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          {item.addon}
                        </div>
                      )}

                      {/* Item Name */}
                      <h3 className="font-heading text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                        {item.name}
                      </h3>

                      {/* Ingredients */}
                      <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed">
                        {item.ingredients}
                      </p>

                      {/* Decorative Element */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-100 rounded-tl-full opacity-20" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Menu Notes */}
          <div className="mt-16 bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl p-8 border-2 border-yellow-200">
            <h3 className="font-heading text-2xl font-semibold text-gray-800 mb-6 text-center">
              הערות חשובות
            </h3>
            <div className="space-y-3">
              {menuNotes.map((note, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <p className="font-body text-base text-gray-700">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t-2 border-yellow-200">
              <p className="font-body text-lg font-semibold text-gray-800 text-center">
                {baseOptions}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-green-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-white font-heading text-4xl md:text-5xl font-bold mb-6">
            מוכנים לחוות את השייק המושלם?
          </h2>
          <p className="text-white/95 font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            בואו לבקר אותנו ותתענגו על שייקים טריים ובריאים, מוכנים במיוחד עבורכם עם מרכיבים איכותיים ביותר
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 font-body font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-50 transition-all duration-300 hover:scale-105"
            >
              צור קשר
            </a>
            <a
              href="/gallery"
              className="bg-yellow-400 text-gray-900 font-body font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
            >
              גלריה
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
