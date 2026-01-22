import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Фаблаб Москва — Первый Российский фаблаб",
    template: "%s | Фаблаб Москва",
  },
  description: "Фаблаб МИСиС — передовая лаборатория цифрового производства в Москве. 3D-печать, лазерная резка, фрезеровка, электроника и образовательные программы для мейкеров.",
  keywords: ["Фаблаб", "FabLab", "Москва", "МИСиС", "3D-печать", "лазерная резка", "ЧПУ", "мастерская", "мейкеры", "DIY", "цифровое производство"],
  authors: [{ name: "Фаблаб Москва" }],
  metadataBase: new URL("https://fablab77.ru"), // Assuming this is the production URL, can be updated
  openGraph: {
    title: "Фаблаб Москва — Лаборатория цифрового производства",
    description: "Воплощайте идеи в жизнь с помощью современных технологий цифрового производства. Открытый доступ к оборудованию и знаниям.",
    url: "https://fablab77.ru",
    siteName: "Фаблаб Москва",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Фаблаб Москва",
    description: "Лаборатория цифрового производства НИТУ МИСИС. Творите, изобретайте, создавайте.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme accentColor="indigo" grayColor="slate" panelBackground="translucent">
          <div className="app-container">
            <Header />
            <main className="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
