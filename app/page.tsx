"use client";

import { motion } from "framer-motion";
import { useState } from "react"; // useEffect kaldırıldı

export default function Home() {
  const [copied, setCopied] = useState(false); // Kopyalama durumu için state

  const copyIP = () => {
    navigator.clipboard.writeText("oyna.minecraftsmp.com.tr:25565");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // 2 saniye sonra "Kopyalandı!" yazısını kaldır
  };

  // Sayfada belirli bir ID'ye kaydırmak için fonksiyon
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      {/* Navbar (Header) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm p-4 shadow-lg">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="#"
            className="text-2xl font-extrabold text-green-400"
          >
            MinecraftSMP
          </motion.a>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-x-6"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg hover:text-green-400 transition"
            >
              Hakkımızda
            </button>
            {/* "Sunucu Bilgileri" ve "Özellikler" yer değiştirdi */}
            <button
              onClick={() => scrollToSection("server-info")}
              className="text-lg hover:text-green-400 transition"
            >
              Sunucu Bilgileri
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-lg hover:text-green-400 transition"
            >
              Özellikler
            </button>
            {/* Discord seçeneği kaldırıldı, yerine Topluluk eklendi (ID ve metin güncellendi) */}
            <button
              onClick={() => scrollToSection("community")}
              className="text-lg hover:text-green-400 transition"
            >
              Topluluk
            </button>
          </motion.div>
        </nav>
      </header>

      {/* HERO SECTION - Arka plan görseli ve overlay kaldırıldı */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center h-screen text-center bg-[url('/bg-mc.jpg')] bg-cover bg-center relative pt-16" // Orjinal arka plan görseli
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* Metin okunabilliği için overlay */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg"
        >
          MinecraftSMP.com.tr
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 mt-4 text-xl md:text-2xl"
        >
          1.21 Survival & Özel Eventler
        </motion.p>
        <motion.button
          onClick={copyIP}
          whileHover={{ scale: 1.1 }}
          className="relative z-10 mt-6 px-8 py-4 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition text-xl font-semibold"
        >
          {copied ? "IP Kopyalandı!" : "Sunucuya Katıl (IP Kopyala)"}
        </motion.button>
        <motion.button
          onClick={() => scrollToSection("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative z-10 mt-4 text-gray-300 hover:text-green-400 underline transition"
        >
          Daha Fazla Bilgi Edinin
        </motion.button>
      </section>

      {/* HAKKIMIZDA SECTION - Yeni eklendi ve ID verildi */}
      <section id="about" className="py-20 max-w-5xl mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-10">Hakkımızda</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-700 rounded-2xl shadow-xl p-8 md:p-12 text-lg leading-relaxed text-gray-200"
        >
          <p className="mb-4">
            MinecraftSMP.com.tr, oyunculara benzersiz bir Minecraft Survival deneyimi sunmak için kuruldu. Sunucumuz, 1.21 sürümünün tüm yeniliklerini barındırırken, aynı zamanda kendi özel eklentilerimiz ve sistemlerimizle oyun keyfinizi katlıyor.
          </p>
          <p className="mb-4">
            Ekonomi sistemimiz sayesinde ticaret yapabilir, özel eventlerimize katılarak değerli ödüller kazanabilir ve arkadaşlarınızla birlikte devasa yapılar inşa edebilirsiniz. Amacımız, topluluk odaklı, eğlenceli ve adil bir oyun ortamı sağlamaktır.
          </p>
          <p>
            Deneyimli yönetici kadromuz ve aktif Discord topluluğumuz ile her zaman yanınızdayız. Gelin, maceramıza siz de katılın!
          </p>
        </motion.div>
      </section>

      {/* SUNUCU BİLGİLERİ SECTION - Geliştirildi ve ID verildi */}
      <section id="server-info" className="py-20 text-center max-w-4xl mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold text-green-400 mb-10">Sunucu Bilgileri</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-700 rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl">
            <div className="flex flex-col items-center">
              <p className="text-gray-300 font-semibold mb-2">Sunucu IP Adresi:</p>
              <p className="bg-gray-800 text-green-400 px-4 py-2 rounded-lg font-mono text-2xl break-all whitespace-nowrap">
                oyna.minecraftsmp.com.tr:25565
              </p>
              <motion.button
                onClick={copyIP}
                whileHover={{ scale: 1.1 }}
                className="mt-4 px-6 py-2 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition text-lg"
              >
                {copied ? "IP Kopyalandı!" : "IP Kopyala"}
              </motion.button>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-300 font-semibold mb-2">Minecraft Sürümü:</p>
              <p className="bg-gray-800 text-green-400 px-4 py-2 rounded-lg font-mono text-2xl">
                1.21 (Son Sürüm)
              </p>
              <p className="text-gray-400 mt-2 text-base">
                Sunucumuz her zaman en güncel sürümle uyumludur.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-300 font-semibold mb-4 text-xl">Sunucu Durumu:</p>
            {/* Buraya gerçek bir sunucu durumu API'sinden veri çekilebilir */}
            <p className="text-yellow-400 text-2xl animate-pulse">
              Aktif Oyuncu Sayısı: Yükleniyor...
            </p>
            <p className="text-gray-400 text-sm mt-2">
              (Gerçek zamanlı oyuncu sayısı için harici bir API entegrasyonu gerekir)
            </p>
          </div>
        </motion.div>
      </section>

      {/* ÖZELLİKLER SECTION - ID eklendi */}
      <section id="features" className="py-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
        <h2 className="col-span-1 md:col-span-3 text-4xl font-bold text-center text-green-400 mb-10">Özellikler</h2>
        {["Gelişmiş Ekonomi Sistemi", "Sık Güncellenen Özel Eventler", "Topluluk Odaklı Survival", "Anti-Hile Koruması", "Aktif Yönetici Ekibi", "Kesintisiz Uptime"].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }} // Gecikmeyi azaltarak daha dinamik bir geçiş
            viewport={{ once: true }}
            className="p-6 bg-gray-700 rounded-2xl shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-transform duration-300" // Hover efekti eklendi
          >
            <h3 className="text-2xl font-bold mb-3 text-green-400">{feature}</h3>
            <p className="text-gray-300 text-md">
              {feature === "Gelişmiş Ekonomi Sistemi" && "Oyun içi para birimiyle ticaret yapın ve zenginleşin."}
              {feature === "Sık Güncellenen Özel Eventler" && "Benzersiz etkinliklerle heyecanlı ödüller kazanın."}
              {feature === "Topluluk Odaklı Survival" && "Arkadaşlarınızla oynayın, yeni insanlarla tanışın ve devasa yapılar inşa edin."}
              {feature === "Anti-Hile Koruması" && "Adil ve eğlenceli bir oyun ortamı için güçlü hile koruması."}
              {feature === "Aktif Yönetici Ekibi" && "Sorularınız ve sorunlarınız için her zaman yanınızdayız."}
              {feature === "Kesintisiz Uptime" && "Sorunsuz bir oyun deneyimi için yüksek sunucu kararlılığı."}
            </p>
          </motion.div>
        ))}
      </section>

      {/* YENİ: WhatsApp ve Discord Kanallarına Katılım Bölümü (eski İletişim bölümünün yerine taşındı) */}
      <section id="community" className="py-20 text-center max-w-4xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-green-400">
          Topluluğumuza Katılın!
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          En son duyurular, etkinlikler ve sohbetler için WhatsApp ve Discord
          kanallarımıza katılın.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-700 rounded-2xl shadow-xl p-8 md:p-12 mt-8"
        >
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <a
              href="https://chat.whatsapp.com/YOUR_WHATSAPP_CHANNEL_LINK" // Buraya WhatsApp kanal linkinizi ekleyin
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-green-600 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-transform duration-300 text-xl font-semibold flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.167 2.833A9.95 9.95 0 0010 0C4.477 0 0 4.477 0 10c0 1.77.46 3.43 1.25 4.887l-1.04 3.75a.75.75 0 00.932.932l3.75-1.04A9.95 9.95 0 0010 20c5.523 0 10-4.477 10-10S15.523 2.833 17.167 2.833zM10 18.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17zM14.5 10a.5.5 0 00-.5-.5H11V7a.5.5 0 00-1 0v2.5H7a.5.5 0 000 1h2.5V13a.5.5 0 001 0v-2.5H14a.5.5 0 00.5-.5z"
                ></path>
              </svg>
              WhatsApp Kanalına Katıl
            </a>
            <a
              href="https://discord.gg/YOUR_DISCORD_INVITE_LINK" // Buraya Discord sunucu linkinizi ekleyin
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transition-transform duration-300 text-xl font-semibold flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.78 2.302a.75.75 0 00-.77-.417 17.8 17.8 0 00-3.522-.505 17.746 17.746 0 00-6.976 0 17.8 17.8 0 00-3.522.505.75.75 0 00-.77.417.75.75 0 00-.148.667 19.56 19.56 0 00.598 2.768 19.56 19.56 0 00.598 2.768a.75.75 0 00.148.667.75.75 0 00.77.417 17.8 17.8 0 003.522.505 17.746 17.746 0 006.976 0 17.8 17.8 0 003.522-.505.75.75 0 00.77-.417.75.75 0 00.148-.667 19.56 19.56 0 00-.598-2.768 19.56 19.56 0 00-.598-2.768.75.75 0 00-.148-.667zM7.5 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                ></path>
              </svg>
              Discord Sunucusuna Katıl
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-400 border-t border-gray-700 mt-10">
        <p>© {new Date().getFullYear()} MinecraftSMP.com.tr | Tüm Hakları Saklıdır.</p>
        {/* Discord footer linki kaldırıldı, yukarıdaki yeni bölüm yeterli */}
      </footer>
    </main>
  );
}
