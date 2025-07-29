// app/page.tsx
"use client";
import { motion } from "framer-motion";

export default function Home() {
  const copyIP = () => {
    navigator.clipboard.writeText("oyna.minecraftsmp.com.tr:25565");
    alert("Sunucu IP'si kopyalandı!");
  };

  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-[url('/bg-mc.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl font-extrabold text-green-400 drop-shadow-lg"
        >
          MinecraftSMP.com.tr
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 mt-4 text-xl"
        >
          1.21 Survival & Özel Eventler
        </motion.p>
        <motion.button
          onClick={copyIP}
          whileHover={{ scale: 1.1 }}
          className="relative z-10 mt-6 px-6 py-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          Sunucuya Katıl (IP Kopyala)
        </motion.button>
      </section>

      {/* SUNUCU BİLGİLERİ */}
      <section className="py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Sunucu Bilgileri</h2>
        <p className="text-gray-300 text-lg mb-2">
          <strong>IP:</strong> oyna.minecraftsmp.com.tr:25565
        </p>
        <p className="text-gray-300 text-lg mb-2">
          <strong>Sürüm:</strong> 1.21
        </p>
      </section>

      {/* ÖZELLİKLER */}
      <section className="py-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {["Ekonomi Sistemi", "Özel Eventler", "Arkadaşlarınla Oyna"].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-700 rounded-2xl shadow-lg hover:shadow-green-500/50 transition"
          >
            <h3 className="text-2xl font-bold mb-2 text-green-400">{feature}</h3>
            <p className="text-gray-300">Minecraft deneyimini üst seviyeye çıkar!</p>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-400">
        © 2025 MinecraftSMP.com.tr | Discord: discord.gg/smp
      </footer>
    </main>
  );
}
