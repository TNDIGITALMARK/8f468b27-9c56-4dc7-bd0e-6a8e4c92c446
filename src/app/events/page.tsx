import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/green-bar/Button';
import { Calendar, Music, Users, Wine } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: 'Live Jazz Nights',
      schedule: 'Every Friday • 9:00 PM - Midnight',
      description: 'Immerse yourself in smooth jazz performed by talented local musicians. Our Friday jazz nights feature rotating artists, creating a sophisticated atmosphere perfect for conversation and cocktails.',
      icon: <Music size={32} />,
      image: '/generated/rooftop-terrace.jpg',
    },
    {
      title: 'Weekend DJ Sets',
      schedule: 'Saturday Nights • 10:00 PM - 2:00 AM',
      description: 'Dance under the stars with curated DJ sets featuring house, electronic, and Mediterranean beats. Our resident DJs create the perfect soundtrack for an unforgettable night.',
      icon: <Music size={32} />,
      image: '/generated/hero-bar-interior.jpg',
    },
    {
      title: 'Cocktail Masterclass',
      schedule: 'First Thursday Monthly • 7:00 PM',
      description: 'Learn the art of mixology from our expert bartenders. Create three signature cocktails and discover professional techniques you can use at home. Limited to 12 participants.',
      icon: <Wine size={32} />,
      image: '/generated/emerald-cocktail.jpg',
    },
  ];

  const specialEvents = [
    {
      date: 'December 31, 2025',
      title: 'New Year\'s Eve Celebration',
      description: 'Ring in the new year with champagne toasts, live music, and breathtaking fireworks views from our rooftop terrace.',
      price: '₪250 per person',
    },
    {
      date: 'January 15, 2026',
      title: 'Mediterranean Wine Tasting',
      description: 'Explore premium wines from Greece, Lebanon, and Israel paired with artisan appetizers. Guided by our sommelier.',
      price: '₪180 per person',
    },
    {
      date: 'February 14, 2026',
      title: 'Valentine\'s Romance Package',
      description: 'Intimate evening for couples with special cocktail menu, live acoustic music, and premium seating.',
      price: '₪400 per couple',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/generated/rooftop-terrace.jpg"
          alt="Green Bar events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-white font-heading text-5xl md:text-6xl font-bold mb-6">
              Events & Entertainment
            </h1>
            <p className="text-white/90 font-body text-lg md:text-xl max-w-2xl mx-auto">
              Experience live music, special celebrations, and unforgettable nights at Green Bar
            </p>
          </div>
        </div>
      </section>

      {/* Recurring Events */}
      <section className="py-20 px-6 bg-off-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-charcoal font-heading text-4xl md:text-5xl font-semibold mb-4">
              Weekly Events
            </h2>
            <p className="text-muted font-body text-lg max-w-2xl mx-auto">
              Join us every week for our signature entertainment experiences
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="bg-copper text-white p-4 rounded-lg inline-flex items-center justify-center w-16 h-16 mb-6">
                      {event.icon}
                    </div>
                    <h3 className="text-charcoal font-heading text-3xl font-semibold mb-3">
                      {event.title}
                    </h3>
                    <p className="text-copper font-body font-semibold text-lg mb-4">
                      {event.schedule}
                    </p>
                    <p className="text-muted font-body leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 px-6 bg-emerald text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-white font-heading text-4xl md:text-5xl font-semibold mb-4">
              Special Events
            </h2>
            <p className="text-white/90 font-body text-lg max-w-2xl mx-auto">
              Exclusive celebrations and unique experiences throughout the year
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-colors"
              >
                <div className="bg-copper text-white p-3 rounded-lg inline-flex items-center justify-center mb-6">
                  <Calendar size={24} />
                </div>
                <p className="text-white/80 font-body text-sm mb-2">{event.date}</p>
                <h3 className="text-white font-heading text-2xl font-semibold mb-4">
                  {event.title}
                </h3>
                <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
                <p className="text-copper font-body font-semibold text-lg">{event.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/70 font-body text-sm mb-6">
              Reservations required for special events • Limited availability
            </p>
            <Link href="/contact">
              <Button variant="copper" size="lg">
                Reserve for Special Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-card">
              <Image
                src="/generated/hero-bar-interior.jpg"
                alt="Private events"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="bg-emerald text-white p-4 rounded-lg inline-flex items-center justify-center w-16 h-16 mb-6">
                <Users size={32} />
              </div>
              <h2 className="text-charcoal font-heading text-4xl md:text-5xl font-semibold mb-6">
                Host Your Event
              </h2>
              <p className="text-muted font-body text-lg mb-6 leading-relaxed">
                Green Bar offers the perfect venue for corporate events, private parties, and special celebrations. Our rooftop terrace and main lounge can accommodate groups of all sizes.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-copper/20 text-copper p-2 rounded mt-1">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <h4 className="text-charcoal font-body font-semibold mb-1">Corporate Events</h4>
                    <p className="text-muted font-body text-sm">Team building, client dinners, networking events</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-copper/20 text-copper p-2 rounded mt-1">
                    <Users size={16} />
                  </div>
                  <div>
                    <h4 className="text-charcoal font-body font-semibold mb-1">Private Parties</h4>
                    <p className="text-muted font-body text-sm">Birthdays, anniversaries, bachelor/bachelorette parties</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-copper/20 text-copper p-2 rounded mt-1">
                    <Wine size={16} />
                  </div>
                  <div>
                    <h4 className="text-charcoal font-body font-semibold mb-1">Special Occasions</h4>
                    <p className="text-muted font-body text-sm">Engagements, graduations, milestone celebrations</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="emerald" size="lg">
                  Inquire About Private Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
