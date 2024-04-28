"use client";

import useFappyBird from "@/hook/useFlappyBird";
import { Avatar, Button } from "antd";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Private from "./Private";
import useAuthStore from "@/store/useAuthStore";
import { COLOR } from "@/const/color";
import LoginButton from "./LoginButton";

const GameMobile = () => {
    const [iframeHeight, setIframeHeight] = useState<number>();
    const { handleJump } = useFappyBird("game_mobile");
    const { userInfo } = useAuthStore();

    useEffect(() => {
        setIframeHeight(414 * (window.innerWidth / 276));
    }, []);

    if (!iframeHeight) return "loading...";

    return (
        <div className="h-screen w-screen flex" style={{ justifyContent: "space-between", flexDirection: "column", backgroundColor: COLOR.BLUE }}>
            <Navigation />
            <div className="flex justify-center p-3">
                <img width={100} src="/logo.png" alt="logo" />
            </div>
            <div className="w-full p-3" style={{ flex: 1, backgroundColor: COLOR.BLUE }}>
                {userInfo ? (
                    <div className="flex h-full flex-col items-center justify-center">
                        <Avatar
                            className="mr-3"
                            style={{ zIndex: 2 }}
                            size={80}
                            icon={<img src="https://img.freepik.com/free-photo/soldier-boy-character-videogame_71767-102.jpg" />}
                        />
                        <b style={{ fontSize: 20 }} className="mt-2">
                            {userInfo.name}
                        </b>
                        <div className="mt-2 flex justify-between" style={{ width: 150 }}>
                            <span>Top 15</span>
                            <b style={{ color: COLOR.TEXT_YELLOW }}>1000 điểm</b>
                        </div>
                    </div>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center" style={{ color: "#5c593b" }}>
                        <h1 style={{ fontSize: 25 }}>Vui lòng đăng nhập để bắt đầu chơi</h1>
                        <Private className="mt-3">
                            <div>
                                <LoginButton />
                            </div>
                        </Private>
                    </div>
                )}
            </div>

            <Private>
                <div style={{ borderTop: "1px solid #75757547" }}>
                    <iframe id="game_mobile" style={{ height: iframeHeight }} className="w-full h-full" src="/game-mobile.html" />
                    <div onClick={handleJump} className="w-full" style={{ height: 50, backgroundColor: "#ddd895" }}></div>
                </div>
            </Private>
        </div>
    );
};

export default GameMobile;
