import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/green-bar/Button';
import { Wine, Sparkles, Flame } from 'lucide-react';

export default function MenuPage() {
  const cocktailCategories = [
    {
      name: 'Signature Cocktails',
      icon: <Sparkles size={24} />,
      drinks: [
        {
          name: 'Emerald Elixir',
          description: 'Premium gin, fresh basil, lime, cucumber, elderflower',
          price: '₪48',
          image: '/generated/emerald-cocktail.jpg',
        },
        {
          name: 'Sunset Spirit',
          description: 'Bourbon, ginger beer, honey, mint, lime',
          price: '₪52',
          image: '/generated/copper-cocktail.jpg',
        },
        {
          name: 'Midnight Manhattan',
          description: 'Rye whiskey, sweet vermouth, aromatic bitters',
          price: '₪54',
          image: '/generated/midnight-cocktail.jpg',
        },
        {
          name: 'Mediterranean Mule',
          description: 'Vodka, cucumber, mint, lime, ginger beer',
          price: '₪46',
          image: '/generated/emerald-cocktail.jpg',
        },
      ],
    },
    {
      name: 'Classic Cocktails',
      icon: <Wine size={24} />,
      drinks: [
        {
          name: 'Old Fashioned',
          description: 'Bourbon, sugar, angostura bitters, orange peel',
          price: '₪50',
        },
        {
          name: 'Negroni',
          description: 'Gin, Campari, sweet vermouth',
          price: '₪48',
        },
        {
          name: 'Mojito',
          description: 'White rum, fresh mint, lime, soda',
          price: '₪44',
        },
        {
          name: 'Margarita',
          description: 'Tequila, triple sec, lime, salt rim',
          price: '₪46',
        },
        {
          name: 'Espresso Martini',
          description: 'Vodka, coffee liqueur, fresh espresso',
          price: '₪50',
        },
        {
          name: 'Whiskey Sour',
          description: 'Bourbon, lemon, simple syrup, egg white',
          price: '₪48',
        },
      ],
    },
    {
      name: 'Premium Spirits',
      icon: <Flame size={24} />,
      drinks: [
        {
          name: 'Japanese Whisky Selection',
          description: 'Hibiki, Yamazaki, Nikka - Ask your bartender',
          price: 'From ₪65',
        },
        {
          name: 'Single Malt Scotch',
          description: 'Macallan, Glenfiddich, Lagavulin',
          price: 'From ₪60',
        },
        {
          name: 'Premium Gin & Tonic',
          description: 'Hendricks, Monkey 47, Botanist with Fever-Tree',
          price: '₪52',
        },
        {
          name: 'Aged Rum Collection',
          description: 'Diplomatico, Zacapa, Ron Barceló Imperial',
          price: 'From ₪55',
        },
      ],
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
              Craft Cocktails Menu
            </h1>
            <p className="text-white/90 font-body text-lg md:text-xl max-w-2xl mx-auto">
              Explore our curated selection of signature and classic cocktails, expertly crafted by our mixologists
            </p>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 px-6 bg-off-white">
        <div className="container mx-auto max-w-7xl">
          {cocktailCategories.map((category, idx) => (
            <div key={category.name} className={idx > 0 ? 'mt-20' : ''}>
              <div className="flex items-center gap-4 mb-12">
                <div className="bg-copper text-white p-4 rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-charcoal font-heading text-4xl font-semibold">
                  {category.name}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.drinks.map((drink) => (
                  <div
                    key={drink.name}
                    className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
                  >
                    {drink.image && (
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={drink.image}
                          alt={drink.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-charcoal font-heading text-xl font-semibold flex-1">
                          {drink.name}
                        </h3>
                        <span className="text-copper font-body font-semibold text-lg ml-4">
                          {drink.price}
                        </span>
                      </div>
                      <p className="text-muted font-body text-sm leading-relaxed">
                        {drink.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottle Service Section */}
      <section className="py-20 px-6 bg-charcoal text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-white font-heading text-4xl md:text-5xl font-semibold mb-6">
              Bottle Service
            </h2>
            <p className="text-off-white font-body text-lg max-w-2xl mx-auto">
              Elevate your experience with our premium bottle service. Perfect for groups and special celebrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-heading text-2xl font-semibold mb-4">Premium Package</h3>
              <p className="text-white/80 font-body mb-6">
                Includes premium spirits, mixers, garnishes, and dedicated table service for up to 6 guests.
              </p>
              <ul className="space-y-3 text-white/70 font-body text-sm mb-6">
                <li>• Choice of premium vodka, gin, or rum</li>
                <li>• Selection of mixers and fresh garnishes</li>
                <li>• Reserved seating in prime location</li>
                <li>• Personal server for your table</li>
              </ul>
              <p className="text-copper font-heading text-3xl font-bold">₪850</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-heading text-2xl font-semibold mb-4">VIP Package</h3>
              <p className="text-white/80 font-body mb-6">
                Ultimate luxury experience with top-shelf spirits and exclusive rooftop seating for up to 8 guests.
              </p>
              <ul className="space-y-3 text-white/70 font-body text-sm mb-6">
                <li>• Ultra-premium spirits selection</li>
                <li>• Premium mixers and artisan garnishes</li>
                <li>• Exclusive rooftop terrace seating</li>
                <li>• Dedicated VIP service team</li>
              </ul>
              <p className="text-copper font-heading text-3xl font-bold">₪1,450</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/60 font-body text-sm mb-6">
              Advance reservation required for bottle service • Subject to availability
            </p>
            <Link href="/contact">
              <Button variant="copper" size="lg">
                Reserve Bottle Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-emerald text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-white font-heading text-4xl md:text-5xl font-semibold mb-6">
            Ready to Experience Our Cocktails?
          </h2>
          <p className="text-white/90 font-body text-lg mb-10 max-w-2xl mx-auto">
            Visit us tonight and let our expert mixologists create the perfect drink for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="copper" size="lg">
                Reserve a Table
              </Button>
            </Link>
            <Link href="/events">
              <Button variant="secondary" size="lg">
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
