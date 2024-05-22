import Auth from "@/screens/auth/page";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import "semantic-ui-css/semantic.min.css";
type Props = {
    params: {locale: string};
  };
  
export const metadata: Metadata = {
    title: "Личный кабинет - Lion IT School",
    description: "Авторизация и регистрация",
    keywords: ["Вход", "Lion IT School"],
};
export default function Home({params: {locale}}: Props) {
    unstable_setRequestLocale(locale);
    return <Auth />;
}
