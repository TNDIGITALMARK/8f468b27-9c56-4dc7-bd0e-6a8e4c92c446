import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/green-bar/Button';
import { ArrowRight, Calendar, Music, Wine } from 'lucide-react';

export default function HomePage() {
  const featuredCocktails = [
    {
      name: 'Emerald Elixir',
      description: 'A vibrant blend of premium gin, fresh basil, lime, and a hint of cucumber. Refreshing and sophisticated.',
      image: '/generated/emerald-cocktail.jpg',
      ingredients: ['Premium Gin', 'Fresh Basil', 'Lime', 'Cucumber', 'Simple Syrup'],
    },
    {
      name: 'Sunset Spirit',
      description: 'Warm bourbon meets ginger, honey, and fresh mint in our signature copper mug. A modern classic.',
      image: '/generated/copper-cocktail.jpg',
      ingredients: ['Bourbon', 'Ginger Beer', 'Honey', 'Mint', 'Lime'],
    },
    {
      name: 'Midnight Manhattan',
      description: 'Rich whiskey, sweet vermouth, and aromatic bitters over a single large ice cube. Timeless elegance.',
      image: '/generated/midnight-cocktail.jpg',
      ingredients: ['Rye Whiskey', 'Sweet Vermouth', 'Bitters', 'Orange Peel'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] w-full">
        <Image
          src="/generated/hero-bar-interior.jpg"
          alt="Green Bar interior with city views"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-white font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Experience Haifa's<br />Premier Lounge
            </h1>
            <p className="text-white/90 font-body text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Craft Cocktails & Unforgettable Nights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="copper" size="lg">
                  Reserve Your Spot
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="secondary" size="lg">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-charcoal font-heading text-4xl md:text-5xl font-semibold mb-6">
                Welcome to Green Bar
              </h2>
              <p className="text-muted font-body text-lg mb-6 leading-relaxed">
                Nestled in the heart of Haifa on Sha'ar Ha-Levanon Street, Green Bar offers an unparalleled experience combining sophisticated mixology, live entertainment, and breathtaking rooftop views of the Mediterranean cityscape.
              </p>
              <p className="text-muted font-body text-lg mb-8 leading-relaxed">
                Our skilled mixologists craft each cocktail with precision and creativity, using premium spirits and fresh, local ingredients. Whether you're enjoying an intimate evening or celebrating with friends, Green Bar provides the perfect atmosphere for unforgettable moments.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-emerald text-3xl font-heading font-bold mb-2">50+</div>
                  <div className="text-muted font-body text-sm">Craft Cocktails</div>
                </div>
                <div>
                  <div className="text-emerald text-3xl font-heading font-bold mb-2">5+</div>
                  <div className="text-muted font-body text-sm">Years Excellence</div>
                </div>
                <div>
                  <div className="text-emerald text-3xl font-heading font-bold mb-2">24/7</div>
                  <div className="text-muted font-body text-sm">Reservations</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-card">
              <Image
                src="/generated/rooftop-terrace.jpg"
                alt="Rooftop terrace with city views"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cocktails Section */}
      <section className="py-20 px-6 bg-off-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-charcoal font-heading text-4xl md:text-5xl font-semibold mb-4">
              Our Craft Cocktails
            </h2>
            <p className="text-muted font-body text-lg max-w-2xl mx-auto">
              Each drink is a masterpiece, carefully crafted by our expert mixologists using premium spirits and fresh ingredients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCocktails.map((cocktail) => (
              <div
                key={cocktail.name}
                className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={cocktail.image}
                    alt={cocktail.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-charcoal font-heading text-2xl font-semibold mb-3">
                    {cocktail.name}
                  </h3>
                  <p className="text-muted font-body text-sm mb-4 leading-relaxed">
                    {cocktail.description}
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-body text-muted font-medium mb-2">Ingredients:</p>
                    <div className="flex flex-wrap gap-2">
                      {cocktail.ingredients.map((ingredient) => (
                        <span
                          key={ingredient}
                          className="text-xs font-body px-2 py-1 bg-off-white text-charcoal rounded"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button variant="emerald" size="lg">
                View Full Menu <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-6 bg-emerald text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white font-heading text-4xl md:text-5xl font-semibold mb-6">
                Upcoming Events
              </h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-copper rounded-lg p-3 flex-shrink-0">
                      <Music size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        Live Jazz Nights
                      </h3>
                      <p className="text-white/80 font-body text-sm mb-2">
                        Every Friday • 9:00 PM - Midnight
                      </p>
                      <p className="text-white/70 font-body text-sm">
                        Experience smooth jazz performances from local talented musicians while enjoying our signature cocktails on the rooftop terrace.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-copper rounded-lg p-3 flex-shrink-0">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        Weekend DJ Sets
                      </h3>
                      <p className="text-white/80 font-body text-sm mb-2">
                        Saturday Nights • 10:00 PM - 2:00 AM
                      </p>
                      <p className="text-white/70 font-body text-sm">
                        Dance the night away with curated DJ sets featuring house, electronic, and Mediterranean beats under the stars.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-copper rounded-lg p-3 flex-shrink-0">
                      <Wine size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        Cocktail Masterclass
                      </h3>
                      <p className="text-white/80 font-body text-sm mb-2">
                        First Thursday Monthly • 7:00 PM
                      </p>
                      <p className="text-white/70 font-body text-sm">
                        Learn the art of mixology from our expert bartenders. Create three signature cocktails and take home professional techniques.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/events">
                  <Button variant="copper" size="lg">
                    View All Events
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-hover">
              <Image
                src="/generated/rooftop-terrace.jpg"
                alt="Rooftop events and live music"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-charcoal text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-white font-heading text-4xl md:text-5xl font-semibold mb-6">
            Ready for an Unforgettable Night?
          </h2>
          <p className="text-off-white font-body text-lg mb-10 max-w-2xl mx-auto">
            Join us at Green Bar for exceptional cocktails, live entertainment, and stunning views. Reserve your table today and experience Haifa's finest rooftop lounge.
          </p>
          <Link href="/contact">
            <Button variant="copper" size="lg">
              Reserve a Table Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
