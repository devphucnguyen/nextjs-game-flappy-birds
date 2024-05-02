import api from "@/api";
import { COLOR } from "@/const/color";
import useFappyBird from "@/hook/useFlappyBird";
import LocalStore, { LOCAL_STORAGE } from "@/service/localStore";
import useAuthStore from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { Avatar } from "antd";

const RankingItem = () => {
    const { userInfo } = useAuthStore();
    const { setMaxScore } = useFappyBird();

    const scoreQuery = useQuery({
        queryKey: ["getScore"],
        queryFn: async () => {
            const score = await api.getScore();
            if (score.maxScore) {
                setMaxScore(score.maxScore);
            }
            return score;
        },
    });

    if (!userInfo) return <></>;

    return (
        <div className="flex flex-col items-center justify-center">
            <Avatar className="mr-3" style={{ zIndex: 2 }} size={80} icon={<img src={userInfo?.user?.avatar} />} />
            <b style={{ fontSize: 20 }} className="mt-2">
                {userInfo?.user?.name}
            </b>
            {scoreQuery.data?.currentRanking && (
                <div className="mt-2 flex justify-between" style={{ width: 150, fontSize: 22 }}>
                    <span>Top {scoreQuery.data?.currentRanking}</span>
                    <b style={{ color: COLOR.TEXT_YELLOW }}>{scoreQuery.data?.maxScore} điểm</b>
                </div>
            )}
        </div>
    );
};

export default RankingItem;
