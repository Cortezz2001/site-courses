import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from "react";

const locales = ["en", "ru", "kk"];
const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: ReactNode;
    params: {locale: string};
  };

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}
  
export async function generateMetadata({
    params: {locale}
  }: Omit<Props, 'children'>) {
    const t = await getTranslations({locale});
  
    return {
      title: t('layoutTitle')
    };
  }

export default async function LocaleLayout({
    children,
    params: { locale }
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}