"use client";

import { COLOR } from "@/const/color";
import { useEffect, useState } from "react";
import Private from "./Private";
import Rangking from "./Ranking";
import GameRules from "./GameRules";
import RankingItem from "./RankingItem";
import useFappyBird from "@/hook/useFlappyBird";
import useAuthStore from "@/store/useAuthStore";
import { Button } from "antd";
import LocalStore from "@/service/localStore";
import { useQueryClient } from "@tanstack/react-query";

const GameDesktop = () => {
    const [iframeWidth, setIframeWidth] = useState<number>();
    const { reset, userInfo } = useAuthStore();
    useFappyBird();
    const queryClient = useQueryClient();

    useEffect(() => {
        setIframeWidth(276 * (window.innerHeight / 414));
    }, []);
    return (
        <div className="flex h-screen" style={{ backgroundColor: COLOR.BLUE, overflow: "hidden" }}>
            {userInfo && (
                <Button
                    danger
                    style={{ position: "fixed", right: 10, top: 10 }}
                    onClick={() => {
                        reset();
                        LocalStore.clearStorage();
                        queryClient.invalidateQueries();
                    }}
                >
                    Đăng xuất
                </Button>
            )}
            <div style={{ flex: 1 }}>
                <Rangking />
            </div>
            <Private>
                <iframe
                    id="flappy_bird_iframe"
                    style={{ width: iframeWidth, cursor: "pointer" }}
                    className="w-full h-screen"
                    src="/game-mobile.html"
                />
            </Private>
            <div className="pt-10" style={{ flex: 1 }}>
                <RankingItem />
                <GameRules />
            </div>
        </div>
    );
};

export default GameDesktop;
