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
        <section className="text-center max-w-2xl">
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
          </div>
        </section>
      </main>

      <footer className="mt-12 text-gray-500 text-sm text-center">
        <p>&copy; 2023 Uygulama Adınız. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}
