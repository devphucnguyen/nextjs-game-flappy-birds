"use client";

import LocalStore, { LOCAL_STORAGE } from "@/service/localStore";
import useAuthStore from "@/store/useAuthStore";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, List, Menu } from "antd";
import { useState } from "react";

interface IProps {
    text?: string;
}

const Navigation = ({ text }: IProps) => {
    const [open, setOpen] = useState(false);
    const { reset } = useAuthStore();

    return (
        <div style={{ position: "relative", zIndex: 3 }}>
            <MenuOutlined style={{ fontSize: 24, position: "absolute", top: 0, left: 0, margin: 10 }} onClick={() => setOpen(true)} />

            <div
                className="animate-fade-right animate-infinite flex w-screen h-screen bg-black"
                style={{ background: "#0000006b", position: "absolute", left: open ? 0 : "-100%" }}
            >
                <div
                    className="h-full bg-white"
                    style={{ position: "absolute", top: 0, width: "80%", left: open ? 0 : "-100%", transitionDuration: ".5s" }}
                >
                    <div className="flex justify-between bottom-1 p-4">
                        <img width={130} src="/logo.png" alt="logo" />
                        <CloseOutlined style={{ fontSize: 24 }} onClick={() => setOpen(false)} />
                    </div>
                    <div className="p-4">
                        <List
                            className="w-full py-3"
                            style={{ marginTop: 10 }}
                            itemLayout="horizontal"
                            dataSource={[
                                {
                                    name: "Thể lệ trò chơi",
                                    href: "/the-le-tro-choi",
                                },
                                {
                                    name: "Bảng xếp hạng",
                                    href: "/bang-xep-hang",
                                },
                                {
                                    name: "Chơi game",
                                    href: "/",
                                },
                            ]}
                            renderItem={(item, index) => {
                                return (
                                    <List.Item>
                                        <a style={{ fontSize: 20 }} href={item.href}>
                                            {item.name}
                                        </a>
                                    </List.Item>
                                );
                            }}
                        />
                        <Button
                            danger
                            onClick={() => {
                                reset();
                                LocalStore.removeItem(LOCAL_STORAGE.SESSION);
                                setOpen(false);
                                location.href = "/";
                            }}
                        >
                            Đăng xuất
                        </Button>
                    </div>
                </div>
                <div className="w-full" style={{ flex: 1 }} onClick={() => setOpen(false)}></div>
            </div>
        </div>
    );
};

export default Navigation;
