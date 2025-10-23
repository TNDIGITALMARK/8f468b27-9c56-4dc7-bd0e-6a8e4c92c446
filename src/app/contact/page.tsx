'use client';

import { useState } from 'react';
import Button from '@/components/green-bar/Button';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      occasion: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-emerald">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald to-emerald/80" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-white font-heading text-5xl md:text-6xl font-bold mb-6">
              Contact & Reservations
            </h1>
            <p className="text-white/90 font-body text-lg md:text-xl max-w-2xl mx-auto">
              Reserve your table or get in touch with us
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-6 bg-off-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-charcoal font-heading text-4xl font-semibold mb-8">
                Visit Us
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-copper text-white p-3 rounded-lg flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-charcoal font-body font-semibold text-lg mb-2">
                      Location
                    </h3>
                    <p className="text-muted font-body">
                      Sha'ar Ha-Levanon Street 8<br />
                      Haifa, Israel
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-copper text-white p-3 rounded-lg flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-charcoal font-body font-semibold text-lg mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+972123456789"
                      className="text-muted font-body hover:text-copper transition-colors"
                    >
                      +972 12 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-copper text-white p-3 rounded-lg flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-charcoal font-body font-semibold text-lg mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:reservations@greenbarhaifa.com"
                      className="text-muted font-body hover:text-copper transition-colors"
                    >
                      reservations@greenbarhaifa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-copper text-white p-3 rounded-lg flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-charcoal font-body font-semibold text-lg mb-2">
                      Hours
                    </h3>
                    <div className="text-muted font-body space-y-1">
                      <p>Monday - Thursday: 6:00 PM - 1:00 AM</p>
                      <p>Friday - Saturday: 6:00 PM - 3:00 AM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-card overflow-hidden">
                <div className="relative h-80 bg-emerald/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-emerald mx-auto mb-4" />
                    <p className="text-charcoal font-body font-semibold mb-2">
                      Sha'ar Ha-Levanon Street 8, Haifa
                    </p>
                    <a
                      href="https://maps.google.com/?q=Sha'ar+Ha-Levanon+Street+8+Haifa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-copper font-body text-sm hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div>
              <h2 className="text-charcoal font-heading text-4xl font-semibold mb-8">
                Reserve a Table
              </h2>

              {submitted && (
                <div className="bg-emerald/10 border-2 border-emerald rounded-lg p-6 mb-8 flex items-start gap-4">
                  <CheckCircle className="text-emerald flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-emerald font-body font-semibold mb-2">
                      Reservation Received!
                    </h3>
                    <p className="text-charcoal font-body text-sm">
                      Thank you for your reservation request. We'll contact you within 24 hours to confirm your booking.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal font-body font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-emerald focus:outline-none transition-colors font-body"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-charcoal font-body font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-emerald focus:outline-none transition-colors font-body"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal font-body font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-emerald focus:outline-none transition-colors font-body"
                    placeholder="+972 12 345 6789"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal font-body font-medium mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-emerald focus:outline-none transition-colors font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-charcoal font-body font-medium mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-emerald focus:outline-none transition-colors font-body"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-charcoal font-body font-medium mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-emerald focus:outline-none transition-colors font-body"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                      <option value="10+">10+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-charcoal font-body font-medium mb-2">
                      Special Occasion
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-emerald focus:outline-none transition-colors font-body"
                    >
                      <option value="">None</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="engagement">Engagement</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal font-body font-medium mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-emerald focus:outline-none transition-colors font-body resize-none"
                    placeholder="Any special requests or dietary requirements?"
                  />
                </div>

                <Button type="submit" variant="copper" size="lg" className="w-full">
                  Submit Reservation Request
                </Button>

                <p className="text-muted font-body text-sm text-center">
                  We'll confirm your reservation within 24 hours. For immediate assistance, please call us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
