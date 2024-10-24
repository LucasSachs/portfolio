import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import clsx from "clsx/lite";

export const metadata: Metadata = {
  title: "Lucas Sachs || Portfolio",
  description: "Esse site faz referência ao Portfolio do Dev Lucas Sachs",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", '500', "600"]
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt"
      className={clsx(poppins.className, 'bg-background')}
      data-theme="custom"
    >
      <body>
          {children}
      </body>
    </html>
  );
}
