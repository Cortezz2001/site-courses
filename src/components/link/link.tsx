"use client"

import { Url } from "next/dist/shared/lib/router/router";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

interface ILinkProps {
    children: string | React.ReactElement | React.ReactNode | undefined
    className?: string | undefined
    style?: CSSProperties | undefined
}

export default function CustomLink(props: LinkProps & ILinkProps) {
    const router = useRouter()

    const toUrl = (href: Url): Url => {
        const lang = localStorage.getItem("lang")
        if (!lang) {
            localStorage.setItem("lang", "ru")
            router.push(href + "/?lang=" + "ru")
            return href + "/?lang=" + "ru"
        }
        else {
            router.push(href + "?lang=" + lang === "kk" ? "kz" : lang)
            return href + "?lang=" + lang === "kk" ? "kz" : lang
        }
    }
    
    return (
        <div
            onClick={() => { toUrl(props.href) }}
            className={props.className}
            style={props.style}>
            {props.children}
        </div>
    )
}