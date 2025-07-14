import { useEffect, useState } from 'react';
import { Phone, Building2, ChevronDown, MapPin } from 'lucide-react';

function App() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);

      try {
        const res = await fetch('https://formspree.io/f/mrbekevo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setResponseMessage('Message sent successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          setResponseMessage('Something went wrong. Please try again.');
        }
      } catch (error) {
        setResponseMessage('Error sending message.');
      } finally {
        setLoading(false);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          rows={5}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondary/80 transition-colors disabled:bg-secondary/50"
        >
          {loading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
        {responseMessage && (
          <p className="text-center text-gray-700">{responseMessage}</p>
        )}
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Header */}
      <header
        className={`bg-white fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-primary/70 backdrop-blur-lg py-2'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <a href="/">
              <img
                src="logos/LOGO ETEL-POWER.png"
                alt="ETEL-CI Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-primary/70 hover:text-secondary transition-colors relative group"
            >
              Nos activités
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a
              href="#contact"
              className="text-primary/70 hover:text-secondary transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="images/ETEL-POWER-Poste-Source-edited.jpg"
            alt="Power station background"
            className="w-full h-full object-cover opacity-30 scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90"></div>
        </div>
        <div
          className={`relative text-center transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            } transition-all duration-1000 space-y-6`}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 relative">
            Solutions électriques professionnelles
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
            Experts en construction et maintenance de postes de transformation
          </p>
          <a href="#services" className="inline-block animate-bounce-slow mt-8">
            <ChevronDown className="w-10 h-10 text-secondary" />
          </a>
        </div>
      </div>

      {/* Services Section with Background Image */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
            alt="Electric grid background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-secondary/90"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-white text-center mb-16 relative">
            Nos activités
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary"></div>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Construction de postes de transformation',
              'Dimensionnement électrique des ouvrages',
              'Réhabilitation de postes HTB existants',
              'Déroulage et montage de câble',
              'Installation et raccordement de jeux de barres',
              'Dimensionnement et réalisation des réseaux',
            ].map((service, index) => (
              <div
                key={index}
                className={`group bg-primary/40 backdrop-blur-sm p-8 rounded-xl transform hover:scale-105 hover:bg-primary/60 transition-all duration-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <Building2 className="w-10 h-10 text-secondary mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                  <p className="text-white text-lg group-hover:text-secondary transition-colors">
                    {service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 to-primary/90"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto bg-white backdrop-blur-sm rounded-2xl p-10 transform hover:scale-[1.01] transition-transform">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 relative">
              Contactez-nous
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary"></div>
            </h2>

            <div className="flex flex-col space-y-6 mb-10">
              <div className="flex items-center space-x-4 text-gray-700 group">
                <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors">
                  <Phone className="w-6 h-6 group-hover:text-secondary transition-colors" />
                </div>
                <span className="group-hover:text-secondary transition-colors">
                  +225 27 22 49 95 95
                </span>
              </div>
              <div className="flex items-center space-x-4 text-gray-700 group">
                <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors">
                  <MapPin className="w-6 h-6 group-hover:text-secondary transition-colors" />
                </div>
                <span className="group-hover:text-secondary transition-colors">
                  Abidjan, Riviera Faya
                </span>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/30 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          © ETEL Power {new Date().getFullYear()} - Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default App;