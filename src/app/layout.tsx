"use client";

import { IWhoAmI } from "@/model/user";
import LocalStore, { LOCAL_STORAGE } from "@/service/localStore";
import useAuthStore from "@/store/useAuthStore";
import { useEffect } from "react";
import "./globals.css";
import { ConfigProvider } from "antd";
import { COLOR } from "@/const/color";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { update } = useAuthStore();

    useEffect(() => {
        const session = LocalStore.getItem<IWhoAmI>(LOCAL_STORAGE.SESSION);

        if (session) {
            update(session);
        }
    }, []);

    return (
        <html lang="en">
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: COLOR.BLUE,
                    },
                }}
            >
                <body style={{ maxWidth: 700 }}>{children}</body>
            </ConfigProvider>
        </html>
    );
}
