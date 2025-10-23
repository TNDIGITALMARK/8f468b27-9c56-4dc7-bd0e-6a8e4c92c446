'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: '/generated/hero-bar-interior.jpg',
      alt: 'Bar interior at golden hour with city lights',
      category: 'Interior',
    },
    {
      src: '/generated/rooftop-terrace.jpg',
      alt: 'Rooftop terrace with city skyline views',
      category: 'Rooftop',
    },
    {
      src: '/generated/emerald-cocktail.jpg',
      alt: 'Signature Emerald Elixir cocktail',
      category: 'Cocktails',
    },
    {
      src: '/generated/copper-cocktail.jpg',
      alt: 'Sunset Spirit in copper mug',
      category: 'Cocktails',
    },
    {
      src: '/generated/midnight-cocktail.jpg',
      alt: 'Midnight Manhattan cocktail',
      category: 'Cocktails',
    },
    {
      src: '/generated/hero-bar-interior.jpg',
      alt: 'Evening ambiance at Green Bar',
      category: 'Ambiance',
    },
    {
      src: '/generated/rooftop-terrace.jpg',
      alt: 'Sunset on the rooftop',
      category: 'Rooftop',
    },
    {
      src: '/generated/hero-bar-interior.jpg',
      alt: 'Live music performance',
      category: 'Events',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-emerald">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald to-emerald/80" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-white font-heading text-5xl md:text-6xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-white/90 font-body text-lg md:text-xl max-w-2xl mx-auto">
              A visual journey through Green Bar's atmosphere, cocktails, and unforgettable moments
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-off-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-body font-medium text-sm mb-1">
                      {image.category}
                    </p>
                    <p className="text-white/80 font-body text-xs">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-copper transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Visit CTA */}
      <section className="py-20 px-6 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-white font-heading text-4xl md:text-5xl font-semibold mb-6">
            Experience It Yourself
          </h2>
          <p className="text-off-white font-body text-lg mb-10 max-w-2xl mx-auto">
            Pictures can't capture the full experience. Visit Green Bar and create your own unforgettable moments.
          </p>
          <a href="/contact">
            <button className="bg-copper text-white font-body font-medium px-10 py-4 rounded-lg hover:bg-copper/90 hover:scale-105 transition-all shadow-md hover:shadow-hover">
              Reserve a Table
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
