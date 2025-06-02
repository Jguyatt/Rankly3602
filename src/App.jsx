// Landing page for a sleek, black-and-white SEO agency site.
// Design: minimal, high-contrast, modern, bold sans-serif fonts.
// Tech: React + TailwindCSS
// Audience: small businesses looking for automated SEO services.

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Rankly360</h1>
        <nav className="space-x-6 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="text-center mt-32 px-6">
        <h2 className="text-5xl font-extrabold tracking-tight mb-4">
          SEO. Automated.
        </h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          White-label SEO solutions for small businesses — completely done-for-you.
        </p>
        <button className="mt-10 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      <section id="features" className="grid md:grid-cols-3 gap-8 mt-32 px-10 text-center">
        <div>
          <h3 className="text-xl font-bold mb-2">Instant Audits</h3>
          <p className="text-gray-400">Automated site audits with clear action plans.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Live Reporting</h3>
          <p className="text-gray-400">Clients track progress in real time through a white-labeled dashboard.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Hands-Free Fulfillment</h3>
          <p className="text-gray-400">We do the work — from backlinks to local SEO — under your brand.</p>
        </div>
      </section>

      <section id="pricing" className="text-center mt-32 px-6">
        <h2 className="text-4xl font-bold mb-6">Simple Pricing</h2>
        <div className="flex justify-center gap-8">
          <div className="bg-white text-black rounded-xl p-8 w-80">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-4xl font-extrabold mb-4">$299/mo</p>
            <ul className="text-sm text-left mb-6">
              <li>✔️ Website audit & SEO plan</li>
              <li>✔️ Monthly backlinks</li>
              <li>✔️ Dashboard access</li>
            </ul>
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-900">
              Choose Plan
            </button>
          </div>
          <div className="bg-white text-black rounded-xl p-8 w-80 border-2 border-white">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-4xl font-extrabold mb-4">$599/mo</p>
            <ul className="text-sm text-left mb-6">
              <li>✔️ All Starter features</li>
              <li>✔️ Local SEO + citations</li>
              <li>✔️ Google Business optimization</li>
            </ul>
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-900">
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="mt-32 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Rankly360</h3>
              <p className="text-gray-400 text-sm">
                Automated SEO solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>hello@agencyname.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Business Ave, Suite 100</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Rankly360. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 