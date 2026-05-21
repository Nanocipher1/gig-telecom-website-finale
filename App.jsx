
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
            <h3 className="text-3xl font-black">Powered By</h3>
            <h2 className="mt-4 text-5xl font-black text-orange-400">
              Kwetu Computer’s LTD
            </h2>
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
    </div>
  )
}
