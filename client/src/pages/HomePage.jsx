import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Wifi, BarChart3, Droplets, Thermometer, Sun, Shield,
  ArrowRight, CheckCircle, ChevronRight, Star
} from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1724141552952-1b44bc26b9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbGdlcmlhbiUyMGZhcm1lciUyMGdyZWVuJTIwd2hlYXQlMjBmaWVsZHxlbnwxfHx8fDE3NzI5MDc3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const droneImg = "https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFncmljdWx0dXJlJTIwZmllbGQlMjBjcm9wJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NzI5MDc2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const sensorImg = "https://images.unsplash.com/photo-1738598665806-7ecc32c3594c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNvaWwlMjBzZW5zb3IlMjBJb1QlMjBkZXZpY2UlMjBmaWVsZHxlbnwxfHx8fDE3NzI5MDc3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const farmerImg = "https://images.unsplash.com/photo-1627829380497-49c37b769ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGFmcmljYW4lMjBmYXJtZXIlMjBmaWVsZCUyMGhhcnZlc3R8ZW58MXx8fHwxNzcyOTA3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080";

const features = [
  {
    icon: Droplets,
    title: "Smart Irrigation",
    desc: "Automated watering based on real-time soil moisture data, reducing water waste by up to 40%.",
    color: "#0ea5e9",
  },
  {
    icon: Thermometer,
    title: "Climate Monitoring",
    desc: "Track temperature, humidity, and microclimate conditions across your entire farm 24/7.",
    color: "#f59e0b",
  },
  {
    icon: BarChart3,
    title: "Yield Analytics",
    desc: "AI-powered predictions and growth analytics to help you maximize every harvest season.",
    color: "#8b5cf6",
  },
  {
    icon: Wifi,
    title: "Real-time Alerts",
    desc: "Instant notifications on your phone for any anomaly — disease risk, drought, or equipment failure.",
    color: "#ec4899",
  },
  {
    icon: Sun,
    title: "Solar Powered",
    desc: "All our IoT sensors are powered by solar energy — zero operating cost, zero carbon footprint.",
    color: "#f97316",
  },
  {
    icon: Shield,
    title: "Data Security",
    desc: "Your farm data is encrypted and stored securely. You own your data — always.",
    color: "#1a6b3c",
  },
];

const steps = [
  {
    num: "01",
    title: "Choose Your Kit",
    desc: "Browse our catalog and select the IoT bundle that fits your farm size and crop type.",
  },
  {
    num: "02",
    title: "Easy Installation",
    desc: "Our technicians install and configure all sensors across your fields in one day.",
  },
  {
    num: "03",
    title: "Connect & Monitor",
    desc: "Access your personalized dashboard via web or mobile to view live data from all sensors.",
  },
  {
    num: "04",
    title: "Grow Smarter",
    desc: "Act on AI-driven insights to improve yields, reduce costs, and farm more sustainably.",
  },
];

const stats = [
  { value: "500+", label: "Farms Connected" },
  { value: "40%", label: "Water Saved" },
  { value: "30%", label: "Yield Increase" },
  { value: "48", label: "Wilayas Covered" },
];

const testimonials = [
  {
    name: "Ahmed Bensalem",
    role: "Wheat Farmer, Sétif",
    text: "AgriSense transformed my 80-hectare farm. I can now monitor everything from my phone. My yield increased by 35% this season!",
    rating: 5,
    img: farmerImg,
  },
  {
    name: "Fatima Zouaoui",
    role: "Greenhouse Owner, Blida",
    text: "The smart irrigation system paid for itself in one season. I save 45% on water costs and my tomatoes have never been healthier.",
    rating: 5,
    img: sensorImg,
  },
  {
    name: "Karim Hadj",
    role: "Date Palm Grower, Biskra",
    text: "Installing AgriSense sensors in my palm grove was the best investment I've made. Real-time alerts saved my crop from a frost last winter.",
    rating: 5,
    img: droneImg,
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="Algerian farmland" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,20,0.85) 0%, rgba(22,101,52,0.7) 50%, rgba(10,40,20,0.6) 100%)" }} />
        </div>

        {/* Animated circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #4ade80, transparent)" }} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #86efac, transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-green-300 border border-green-400/30 bg-green-900/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Smart Agriculture Revolution in Algeria
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Grow Smarter with{" "}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #4ade80, #86efac)" }}>
              IoT Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            AgriSense DZ delivers cutting-edge IoT sensors and smart monitoring systems to Algerian farmers — helping you track crops, save water, and maximize yields in real time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:shadow-2xl hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1a6b3c, #16a34a)" }}
            >
              Explore Products <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              View Solutions <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-white/60"
          >
            {["MESRS Certified", "Made in Algeria 🇩🇿", "ISO 9001:2015", "500+ Farms Trust Us"].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" /> {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/20 animate-pulse" />
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-12" style={{ background: "linear-gradient(135deg, #1a6b3c, #16a34a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-green-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Why AgriSense</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Everything Your Farm Needs</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our complete IoT ecosystem is designed specifically for Algeria's diverse agricultural landscape — from the Tell Atlas to the Saharan oases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${f.color}15` }}
                >
                  <f.icon className="w-7 h-7" style={{ color: f.color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">How It Works</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">From Setup to Smart Farming in 4 Simple Steps</h2>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ background: "linear-gradient(135deg, #1a6b3c, #16a34a)" }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/products"
                className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:shadow-lg hover:scale-105"
                style={{ background: "linear-gradient(135deg, #1a6b3c, #16a34a)" }}
              >
                Shop IoT Kits <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={droneImg} alt="Drone monitoring farmland" className="w-full h-96 object-cover" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">This Season</div>
                  <div className="font-bold text-gray-900 text-sm">+32% Yield Growth</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Water Efficiency</div>
                  <div className="font-bold text-gray-900 text-sm">40% Less Usage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Products Preview ─── */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Our Products</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">IoT Solutions Built for Algerian Farms</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Rugged, solar-powered devices designed to withstand Algeria's climate — from coastal humidity to desert heat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "SoilSense Pro", category: "Soil Monitoring", price: "12,900 DZD", img: sensorImg, badge: "Best Seller" },
              { name: "AquaGuard System", category: "Smart Irrigation", price: "24,500 DZD", img: "https://images.unsplash.com/photo-1758414089320-dac72d347fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwaXJyaWdhdGlvbiUyMHdhdGVyJTIwbWFuYWdlbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTA3NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080", badge: "New" },
              { name: "CropEye Drone Kit", category: "Aerial Monitoring", price: "89,000 DZD", img: droneImg, badge: "Premium" },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: i === 0 ? "#1a6b3c" : i === 1 ? "#0ea5e9" : "#7c3aed" }}
                  >
                    {product.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-green-600 mb-1">{product.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <Link
                      to="/products"
                      className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                      style={{ background: "linear-gradient(135deg, #1a6b3c, #16a34a)" }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-green-700 text-green-700 font-semibold hover:bg-green-700 hover:text-white transition-all"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-4">Trusted by Algerian Farmers</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Real stories from farmers across Algeria who transformed their operations with AgriSense.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a6b3c 0%, #16a34a 50%, #15803d 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your Farm?
            </h2>
            <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
              Join 500+ Algerian farmers who are already growing smarter with AgriSense IoT technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-white text-green-800 font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Request a Demo
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}