import { useEffect } from "react";

const useFappyBird = (id: string) => {
    const handleJump = () => {
        const gameElm: any = document.getElementById("game_mobile");
        gameElm?.contentWindow?.postMessage("on_tap_in_game", "*");
    };

    useEffect(() => {
        const gameElm = document.getElementById(id);
        if (!gameElm) return;

        gameElm.addEventListener("keydown", (e: any) => {
            if (e.keyCode == 32 || e.keyCode == 87 || e.keyCode == 38) {
                handleJump();
            }
        });

        return () => {
            document.body.removeEventListener("keydown", () => {});
        };
    }, []);

    return {
        handleJump,
    };
};

export default useFappyBird;
