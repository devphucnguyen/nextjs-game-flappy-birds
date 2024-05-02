import useConfirmStore from "@/store/useConfirmStore";
import { Button, Drawer, Modal, Space, Spin } from "antd";
import RankingItem from "./RankingItem";
import { useQuery } from "@tanstack/react-query";
import api from "@/api";

const ConfirmAfterPlay = () => {
    const { open, update } = useConfirmStore();
    const giftQuery = useQuery({ queryKey: ["getGift"], queryFn: api.getGift });

    return (
        <Drawer
            title="Game over"
            placement={"bottom"}
            width={500}
            size="large"
            onClose={() => update(false)}
            open={open}
            extra={
                <Space>
                    <Button onClick={() => update(false)}>Dừng</Button>
                    <Button type="primary" onClick={() => update(false)}>
                        Chơi tiếp
                    </Button>
                </Space>
            }
        >
            <RankingItem />

            {giftQuery.isLoading ? (
                <Spin size="large" />
            ) : (
                <>
                    {giftQuery.data?.map((gift, index) => {
                        return (
                            <div key={`${gift.id}${index}`}>
                                <b>{gift?.name}</b>
                                {gift?.detail?.map((item) => {
                                    return (
                                        <div key={`${gift.id}${item.gift}${index}`}>
                                            <div>{item.gift}</div>
                                            <div>Chỉ còn lại {item.capacity} phần quà</div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </>
            )}
        </Drawer>
    );
};

export default ConfirmAfterPlay;
