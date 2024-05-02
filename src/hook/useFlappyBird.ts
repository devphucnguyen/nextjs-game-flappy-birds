import api from "@/api";
import { IGameOver } from "@/model/game";
import useConfirmStore from "@/store/useConfirmStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const useFappyBird = () => {
    const confirmStore = useConfirmStore();
    const queryClient = useQueryClient();

    const logScoreMutation = useMutation({
        mutationFn: async (payload: number) => {
            try {
                const res = await api.logScore({ score: payload });
                return res;
            } catch (error) {
                console.log("error: ", error);
            }
        },
    });

    useEffect(() => {
        window.addEventListener("message", async function (e) {
            const data = e.data as IGameOver;
            if (data?.message === "game_over") {
                await logScoreMutation.mutate(data.curr);
                queryClient.invalidateQueries({ queryKey: ["getRanking"] });
                queryClient.invalidateQueries({ queryKey: ["getScore"] });
                confirmStore.update(true);
            }
        });

        return () => {
            document.body.removeEventListener("keydown", () => {});
            window.removeEventListener("message", () => {});
        };
    }, []);

    const setMaxScore = (value: number) => {
        const elm: any = document.getElementById("flappy_bird_iframe");
        elm.contentWindow.postMessage({ message: "set_best", best: value }, "*");
    };

    return { setMaxScore };
};

export default useFappyBird;
