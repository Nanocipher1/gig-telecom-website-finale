import ContactForm from './ContactForm';
import SpeedTest from './SpeedTest';
import BookInstallation from './BookInstallation';

export default function GigTelecomWebsite() {
  const packages = [
    {
      speed: '6 Mbps',
      price: 'KSh 1500',
      features: ['Unlimited Internet', 'HD Streaming', 'Free First Month'],
      popular: false,
    },
    {
      speed: '10 Mbps',
      price: 'KSh 2000',
      features: ['Gaming Ready', 'Multiple Devices', 'Priority Support'],
      popular: true,
    },
    {
      speed: '15 Mbps',
      price: 'KSh 2500',
      features: ['Ultra Fast Speeds', 'Office & CCTV Ready', 'Premium Stability'],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden text-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-blue-950">
              GiG <span className="text-orange-500">Telecom</span>
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-700">
            <a href="#home" className="hover:text-blue-900">Home</a>
            <a href="#packages" className="hover:text-blue-900">Packages</a>
            <a href="#features" className="hover:text-blue-900">Features</a>
            <a href="#book" className="hover:text-orange-500 text-orange-500 font-black">Book</a>
            <a href="#contact" className="hover:text-blue-900">Contact</a>
          </nav>

          <a
            href="tel:0112295189"
            className="bg-blue-950 hover:bg-blue-900 text-white px-5 py-3 rounded-2xl font-semibold shadow-xl transition-all duration-300"
          >
            Call 0112295189
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white flex items-center"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24">
          <div>
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-2 rounded-full backdrop-blur-lg mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-sm text-slate-200">
                Reliable • Fast • Always Connected
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              The Future of Connectivity,
              <span className="block text-orange-400">Built by You.</span>
            </h1>

            <p className="mt-8 text-xl text-slate-300 max-w-xl leading-relaxed">
              Premium internet solutions for homes, businesses, offices and CCTV systems across Taita Taveta.
              Experience speed, stability and next-generation connectivity.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="https://wa.me/254112295189"
                target="_blank"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Connected
              </a>

              <a
                href="#packages"
                className="border border-white/20 bg-white/10 hover:bg-white hover:text-blue-950 px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-xl transition-all duration-300"
              >
                View Packages
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <h3 className="text-4xl font-black text-orange-400">99%</h3>
                <p className="text-slate-400 mt-2">Network Uptime</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-orange-400">24/7</h3>
                <p className="text-slate-400 mt-2">Support</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-orange-400">Fast</h3>
                <p className="text-slate-400 mt-2">Installation</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative bg-white/10 border border-white/10 backdrop-blur-2xl p-6 rounded-[40px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=1400&auto=format&fit=crop"
                alt="Gig Telecom"
                className="rounded-[30px] w-full max-w-xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-blue-950">Internet Packages</h2>
            <p className="mt-5 text-slate-600 text-lg">
              Affordable high-speed internet packages designed for modern living.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-[32px] p-10 transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular
                    ? 'bg-blue-950 text-white shadow-2xl scale-105'
                    : 'bg-white border border-slate-200 shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <h3 className={`text-4xl font-black ${pkg.popular ? 'text-white' : 'text-blue-950'}`}>
                  {pkg.speed}
                </h3>

                <div className="mt-8">
                  <span className={`text-6xl font-black ${pkg.popular ? 'text-orange-400' : 'text-orange-500'}`}>
                    {pkg.price}
                  </span>
                  <p className={`mt-3 ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    Per Month
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/254112295189"
                  target="_blank"
                  className={`mt-10 w-full block text-center py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-blue-950 hover:bg-blue-900 text-white'
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-blue-950">Why Choose Us</h2>
            <p className="mt-5 text-slate-600 text-lg">
              Enterprise-level internet quality built for homes and businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Ultra Fast Speeds',
                text: 'Optimized internet performance for streaming, gaming and remote work.',
              },
              {
                icon: '📡',
                title: 'Reliable Coverage',
                text: 'Stable wireless connectivity with professional networking solutions.',
              },
              {
                icon: '🛠️',
                title: 'Professional Installation',
                text: 'Fast setup with expert technicians and quality equipment.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-slate-50 hover:bg-blue-950 hover:text-white rounded-[32px] p-10 shadow-lg transition-all duration-500"
              >
                <div className="text-6xl mb-8">{item.icon}</div>
                <h3 className="text-3xl font-black">{item.title}</h3>
                <p className="mt-5 text-lg leading-relaxed opacity-80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-500/20 text-orange-400 font-bold text-sm px-4 py-2 rounded-full mb-4">Speed Test</span>
            <h2 className="text-5xl font-black">Test Your Internet Speed</h2>
            <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">Check how fast your current connection is — then see how much faster you could be with GiG Telecom.</p>
          </div>
          <SpeedTest />
        </div>
      </section>

      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 font-bold text-sm px-4 py-2 rounded-full mb-4">Customer Stories</span>
            <h2 className="text-5xl font-black text-slate-900">What Our Customers Say</h2>
            <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">Real people. Real connections. Real results across Taita Taveta.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'James Mwangi',
                location: 'Voi Town',
                text: 'Since switching to GiG Telecom, my home internet has been rock solid. No more buffering during movie nights. Best decision I made this year!',
                stars: 5,
              },
              {
                name: 'Amina Hassan',
                location: 'Wundanyi',
                text: 'I run a small shop and rely on the internet for M-Pesa and ordering stock. GiG keeps me connected 24/7. Installation was fast and the team was very professional.',
                stars: 5,
              },
              {
                name: 'Peter Kimani',
                location: 'Mwatate',
                text: 'Great speed for the price. I use the 10 Mbps package and it handles all my remote work calls without any issues. Highly recommend to businesses.',
                stars: 5,
              },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: review.stars }).map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed flex-1">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-black text-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                    <p className="text-slate-400 text-xs">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 font-bold text-sm px-4 py-2 rounded-full mb-4">Coverage Area</span>
            <h2 className="text-5xl font-black text-slate-900">We Serve Taita Taveta</h2>
            <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">Fast, reliable internet across towns and villages in the region. More areas coming soon.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 h-96">
              <iframe
                title="GiG Telecom Coverage Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255662.89101948!2d38.20!3d-3.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182e5c9c7b1a0e9b%3A0x4d1b1e2b2b2b2b2b!2sTaita%20Taveta%20County!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Currently Covered Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Voi Town', 'Wundanyi', 'Mwatate', 'Taveta',
                  'Moi\'s Bridge', 'Bura', 'Kishushe', 'Mbale',
                  'Kaloleni', 'Mgange', 'Mbololo', 'Werugha',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-3 bg-slate-50 rounded-2xl px-4 py-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0"></span>
                    <span className="font-semibold text-slate-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5">
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-bold text-orange-600">Not seeing your area?</span> We're expanding fast. Call us on <span className="font-bold">0112295189</span> to find out when we're coming to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 font-bold text-sm px-4 py-2 rounded-full mb-4">FAQ</span>
            <h2 className="text-5xl font-black text-slate-900">Common Questions</h2>
            <p className="mt-4 text-xl text-slate-500">Everything you need to know before getting connected.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How much does installation cost?',
                a: 'Installation is a one-time fee of KSh 2,000. This covers equipment setup, cable runs, and configuration at your premises.',
              },
              {
                q: 'How long does installation take?',
                a: 'Most installations are completed within the same day of booking. Our technicians will confirm a time that works for you.',
              },
              {
                q: 'What internet speeds do you offer?',
                a: 'We offer packages starting from 6 Mbps up to 20 Mbps and beyond. Each plan is designed to suit different needs — from casual browsing to heavy business use.',
              },
              {
                q: 'Is the internet connection limited or unlimited?',
                a: 'All our packages come with unlimited data. No caps, no throttling — just consistent speed all month long.',
              },
              {
                q: 'Do you support businesses and offices?',
                a: 'Yes! We provide dedicated connections for businesses, offices, and CCTV systems. Contact us for a custom business quote.',
              },
              {
                q: 'What happens if I have a connection problem?',
                a: 'Our support team is available 24/7. Simply call 0112295189 or reach us on WhatsApp and we will respond promptly.',
              },
            ].map((item, i) => (
              <details key={i} className="group bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-slate-900 text-lg list-none">
                  {item.q}
                  <span className="ml-4 shrink-0 text-orange-500 text-2xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="px-6 pb-6 text-slate-500 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-r from-orange-500 to-orange-400 text-white relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black leading-tight">
            Ready to Experience Better Internet?
          </h2>

          <p className="mt-6 text-xl opacity-90 max-w-3xl mx-auto">
            Join GiG Telecommunications today and enjoy stable, high-speed internet built for modern lifestyles.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/254112295189"
              target="_blank"
              className="bg-blue-950 hover:bg-slate-900 px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl"
            >
              Get Started
            </a>

            <a
              href="tel:0112295189"
              className="bg-white text-orange-500 hover:bg-slate-100 px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl"
            >
              Call 0112295189
            </a>
          </div>
        </div>
      </section>

      <section id="book" className="py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block bg-orange-500/20 text-orange-400 font-bold text-sm px-4 py-2 rounded-full mb-6">Book Installation</span>
              <h2 className="text-5xl font-black leading-tight">Schedule Your Installation</h2>
              <p className="mt-6 text-xl text-slate-400 leading-relaxed">
                Pick a date and time that works for you. Our technicians will arrive, set everything up, and have you connected the same day.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  { icon: '📅', title: 'Same-Day Setup', desc: 'Most installations are completed in a single visit.' },
                  { icon: '🛠️', title: 'Professional Technicians', desc: 'Trained team handles all equipment and cabling.' },
                  { icon: '💰', title: 'One-Time Fee of KSh 2,000', desc: 'No hidden costs — just pay once and you\'re connected.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-orange-500/15 flex items-center justify-center text-xl shrink-0">{icon}</div>
                    <div>
                      <p className="font-bold text-white">{title}</p>
                      <p className="text-slate-400 text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-black mb-6">Fill in Your Details</h3>
              <BookInstallation />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black leading-tight">
              Let’s Connect Your Home or Business.
            </h2>

            <p className="mt-6 text-xl text-slate-400 leading-relaxed">
              Contact our support team for installation, package selection and technical assistance.
            </p>

            <div className="mt-10 space-y-6 text-lg">
              <div>
                <p className="text-slate-400">Phone Number</p>
                <h3 className="text-2xl font-bold">0112295189</h3>
              </div>

              <div>
                <p className="text-slate-400">Installation Fee</p>
                <h3 className="text-2xl font-bold">KSh 2000</h3>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl">
            <h3 className="text-2xl font-black mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-black text-slate-500 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h2 className="text-2xl font-black text-white">
              GiG <span className="text-orange-500">Telecom</span>
            </h2>
            <p className="mt-2">The Future of Connectivity, Built by You.</p>
          </div>

          <div className="text-sm text-center md:text-right">
            © 2026 GiG Telecommunications • Powered by Kwetu Computer’s LTD
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/254112295189?text=Hi%2C%20I%27m%20interested%20in%20GiG%20Telecom%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105 group"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.16c-1.52 0-3-.4-4.28-1.16l-.31-.18-3.12.82.83-3.04-.2-.32A8.13 8.13 0 0 1 3.97 11.91c0-4.45 3.62-8.07 8.07-8.07s8.07 3.62 8.07 8.07-3.62 8.07-8.07 8.07zm4.44-6.05c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.21-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.46-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2 .86 2.32.98 2.48c.12.16 1.68 2.56 4.07 3.59.57.24 1.01.39 1.36.5.57.18 1.09.15 1.5.09.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.15-.06-.1-.22-.16-.46-.28z"/>
        </svg>
        <span className="text-sm">Chat with us</span>
      </a>
    </div>
  )
}
