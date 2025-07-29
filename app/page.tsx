import Image from "next/image"; // Eğer Image bileşeni kullanılıyorsa, bu import satırı kalmalı

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-purple-400 mb-4">
          Hoş Geldiniz
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Uygulamanızın ana sayfası
        </p>
      </header>

      <main className="flex flex-col items-center justify-center space-y-6">
        {/* YENİ: Sunucu Bilgileri Bölümü */}
        <section className="text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-purple-300">
            Sunucu Bilgileri
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Sunucumuz hakkında güncel bilgilere buradan ulaşabilirsiniz.
            Bağlantı adresleri, sürüm bilgileri ve daha fazlası aşağıdadır.
          </p>
          <ul className="mt-6 space-y-3 text-left max-w-md mx-auto">
            <li className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              IP Adresi: <span className="font-semibold ml-2">oyun.sunucuadi.com</span>
            </li>
            <li className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Sürüm: <span className="font-semibold ml-2">1.20.4</span>
            </li>
            <li className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 mr-2 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 10.586V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Çalışma Saatleri: <span className="font-semibold ml-2">7/24 Aktif</span>
            </li>
          </ul>
        </section>

        {/* MEVCUT: Hizmetlerimiz Bölümü (Özellikler olarak algılandı) */}
        <section className="text-center max-w-2xl mt-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-purple-300">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Burada sunduğunuz hizmetler veya uygulamanızın temel özellikleri
            hakkında kısa ve öz bilgiler verebilirsiniz. Kullanıcıların
            ilgilerini çekecek ana noktaları vurgulayın.
          </p>
          <ul className="mt-6 space-y-3 text-left max-w-md mx-auto">
            <li className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* DÜZELTİLMİŞ SVG PATH (Onay İşareti) */}
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Özellik 1: Harika bir özellik
            </li>
            <li className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* DÜZELTİLMİŞ SVG PATH (Onay İşareti) */}
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Özellik 2: Daha da iyi bir özellik
            </li>
            <li className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 mr-2 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* DÜZELTİLMİŞ SVG PATH (Onay İşareti) */}
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Özellik 3: Vazgeçilmez bir özellik
            </li>
          </ul>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-purple-300">
            Bize Katılın
          </h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition text-xl font-semibold flex items-center justify-center"
            >
              {/* DÜZELTİLMİŞ SVG KODU (Sağa Ok) */}
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Hemen Başlayın
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 border border-purple-600 text-purple-400 rounded-full shadow-lg hover:bg-purple-900 hover:border-purple-700 transition text-xl font-semibold flex items-center justify-center"
            >
              Daha Fazla Bilgi
            </a>
            {/* YENİ: İletişim Butonu */}
            <a
              href="#" // Buraya iletişim sayfanızın veya e-posta adresinizin linkini ekleyebilirsiniz
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition text-xl font-semibold flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.339-3.182A8.964 8.964 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                ></path>
              </svg>
              İletişim
            </a>
          </div>
        </section>
      </main>

      {/* YENİ: WhatsApp ve Discord Kanallarına Katılım Bölümü */}
      <section className="mt-16 text-center max-w-2xl p-6 bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-green-400">
          Topluluğumuza Katılın!
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          En son duyurular, etkinlikler ve sohbetler için WhatsApp ve Discord
          kanallarımıza katılın.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <a
            href="https://chat.whatsapp.com/YOUR_WHATSAPP_CHANNEL_LINK" // Buraya WhatsApp kanal linkinizi ekleyin
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 py-4 bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition text-xl font-semibold flex items-center justify-center"
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
            className="w-full md:w-auto px-8 py-4 bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 transition text-xl font-semibold flex items-center justify-center"
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
      </section>

      <footer className="mt-12 text-gray-500 text-sm text-center">
        <p>&copy; 2023 Uygulama Adınız. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}
