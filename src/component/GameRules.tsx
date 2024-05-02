import api from "@/api";
import { useQuery } from "@tanstack/react-query";

const GameRules = () => {
    const giftQuery = useQuery({ queryKey: ["getGift"], queryFn: api.getGift });

    return (
        <div className="p-3" style={{ overflow: "auto" }}>
            <div className="text-center" style={{ fontSize: 25 }}>
                Thể lệ trò chơi
            </div>
            {giftQuery.data?.map((gift, index) => {
                return (
                    <div key={`${gift.id}${index}${gift?.name}`}>
                        <b>{gift?.name}</b>
                        {gift?.detail?.map((item, _index) => {
                            return (
                                <div key={`${gift.id}${item.gift}${_index}${index}`}>
                                    <div>{item.gift}</div>
                                    <div>Chỉ còn lại {item.capacity} phần quà</div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default GameRules;
