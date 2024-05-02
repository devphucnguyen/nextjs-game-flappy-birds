"use client";

import { COLOR } from "@/const/color";
import useFappyBird from "@/hook/useFlappyBird";
import useAuthStore from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import Navigation from "./Navigation";
import Private from "./Private";
import RankingItem from "./RankingItem";

const GameMobile = () => {
    const [iframeHeight, setIframeHeight] = useState<number>();
    const { userInfo } = useAuthStore();
    useFappyBird();

    useEffect(() => {
        setIframeHeight(414 * (window.innerWidth / 276));
    }, []);

    if (!iframeHeight) return "loading...";

    return (
        <div className="h-full w-full flex" style={{ justifyContent: "space-between", flexDirection: "column", backgroundColor: COLOR.BLUE }}>
            <Navigation />
            <div className="w-full p-3" style={{ flex: 1, backgroundColor: COLOR.BLUE }}>
                {userInfo ? (
                    <RankingItem />
                ) : (
                    <div className="flex h-full flex-col items-center justify-center" style={{ color: "#5c593b" }}>
                        <h1 style={{ fontSize: 20 }}>Vui lòng đăng nhập để bắt đầu chơi</h1>
                        <Private className="mt-3">
                            <div>
                                <LoginButton />
                            </div>
                        </Private>
                    </div>
                )}
            </div>

            <Private>
                <div>
                    <iframe id="flappy_bird_iframe" style={{ height: iframeHeight }} className="w-full h-full" src="/game-mobile.html" />
                </div>
            </Private>
        </div>
    );
};

export default GameMobile;
