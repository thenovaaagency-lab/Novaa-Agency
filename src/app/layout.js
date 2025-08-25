// import { Inter, Poppins } from 'next/font/google';
// import Header from './components/layouts/Header';
// import Footer from './components/layouts/Footer';
// import './globals.css';

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter'
// });

// const poppins = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['300', '400', '500', '600', '700', '800'],
//   variable: '--font-poppins'
// });

// export const metadata = {
//   title: 'Novaa Agency - AI Automation Solutions',
//   description: 'Empowering brands with cutting-edge AI automation. Custom chatbots, voice solutions, and intelligent agents for modern businesses.',
//   keywords: 'AI automation, chatbots, voice solutions, WhatsApp automation, custom AI agents, business automation',
//   author: 'Novaa Agency',
//   viewport: 'width=device-width, initial-scale=1',
//   robots: 'index, follow',
//   og: {
//     title: 'Novaa Agency - AI Automation Solutions',
//     description: 'Transform your business with cutting-edge AI solutions. From intelligent chatbots to voice automation.',
//     type: 'website',
//     url: 'https://novaagency.com',
//     image: '/images/og-image.jpg',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@novaagency',
//     creator: '@novaagency',
//     title: 'Novaa Agency - AI Automation Solutions',
//     description: 'Transform your business with cutting-edge AI solutions.',
//     image: '/images/twitter-image.jpg',
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
//       <head>
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
//         <link rel="manifest" href="/manifest.json" />
//         <meta name="theme-color" content="#3b82f6" />

//       </head>
//       <body className="font-sans antialiased">
//         <div className="min-h-screen flex flex-col">
//           <Header />
//           <main className="flex-grow">
//             {children}
//           </main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }


import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata = {
  title: 'Novaa Agency - AI Automation Solutions',
  description: 'Empowering brands with cutting-edge AI automation. Custom chatbots, voice solutions, and intelligent agents for modern businesses.',
  keywords: 'AI automation, chatbots, voice solutions, WhatsApp automation, custom AI agents, business automation',
  author: 'Novaa Agency',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  og: {
    title: 'Novaa Agency - AI Automation Solutions',
    description: 'Transform your business with cutting-edge AI solutions. From intelligent chatbots to voice automation.',
    type: 'website',
    url: 'https://novaagency.com',
    image: '/images/og-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@novaagency',
    creator: '@novaagency',
    title: 'Novaa Agency - AI Automation Solutions',
    description: 'Transform your business with cutting-edge AI solutions.',
    image: '/images/twitter-image.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        {/* Voiceflow Widget Script */}
        <Script
          id="voiceflow-widget"
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '686e61fd59d5ed3c78938005' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    }
                  });
                };
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
                v.type = "text/javascript";
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `
          }}
        />
      </body>
    </html>
  );
}
