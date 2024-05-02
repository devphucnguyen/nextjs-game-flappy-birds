"use client";

import api from "@/api";
import { COLOR } from "@/const/color";
import { ISession } from "@/model/user";
import LocalStore, { LOCAL_STORAGE } from "@/service/localStore";
import useAuthStore from "@/store/useAuthStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import "./globals.css";

const queryClient = new QueryClient();

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const { update } = useAuthStore();

    useEffect(() => {
        fetUserData();
    }, []);

    const fetUserData = async () => {
        const session = LocalStore.getItem<ISession>(LOCAL_STORAGE.SESSION);
        if (!session?.access_token) return;

        const whoamiData = await api.whoami();
        update(whoamiData);
        LocalStore.setItem(LOCAL_STORAGE.USER_INFO, whoamiData);
    };

    return (
        <html lang="en">
            <body className="m-auto">
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: COLOR.BLUE,
                        },
                    }}
                >
                    <QueryClientProvider client={queryClient}>
                        {/* <ConfirmAfterPlay /> */}
                        {children}
                    </QueryClientProvider>
                </ConfigProvider>
            </body>
        </html>
    );
};

export default RootLayout;



function ProfilePage({ userId }: any) {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        // Call api set user info
    }, []);

    return <Profile userInfo={userInfo} />;
}

const Profile = ({ userInfo }: any) => {
    return <div>{userInfo.name}</div>;
};
