"use client";

import api from "@/api";
import { COLOR } from "@/const/color";
import { Avatar } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Rangking = () => {
    const [limit, setLimit] = useState(20);

    const topThreeQuery = useQuery({ queryKey: ["getRanking", 3], queryFn: () => api.getRanking({ limit: 3, offset: 0 }) });
    const rankingQuery = useQuery({ queryKey: ["getRanking", limit], queryFn: () => api.getRanking({ limit, offset: 3 }) });

    return (
        <div className="flex flex-col">
            <div className="" style={{ backgroundColor: COLOR.BLUE, borderBottomRightRadius: "35px", borderBottomLeftRadius: "35px", height: 330 }}>
                <div className="text-center pb-3 pt-6" style={{ fontSize: 25 }}>
                    Bảng xếp hạng
                </div>
                <div className="flex pb-8 p-2">
                    <div className="flex justify-center flex-col items-center" style={{ width: "30%", position: "relative", marginTop: 80 }}>
                        <Avatar size={80} icon={<img src={topThreeQuery.data?.[1]?.user?.avatar} />} />
                        <div className="mt-2">{topThreeQuery.data?.[1]?.user?.name}</div>
                        <b style={{ color: COLOR.TEXT_YELLOW }}>{topThreeQuery.data?.[1]?.score} điểm</b>
                    </div>

                    <div className="flex justify-center flex-col items-center" style={{ width: "40%" }}>
                        <Avatar size={120} icon={<img src={topThreeQuery.data?.[0]?.user?.avatar} />} />
                        <div className="mt-2">{topThreeQuery.data?.[0]?.user?.name}</div>
                        <b style={{ color: COLOR.TEXT_YELLOW }}>{topThreeQuery.data?.[0]?.score} điểm</b>
                    </div>
                    <div className="flex justify-center flex-col items-center" style={{ width: "30%", position: "relative", marginTop: 80 }}>
                        <Avatar size={80} icon={<img src={topThreeQuery.data?.[2]?.user?.avatar} />} />
                        <div className="mt-2">{topThreeQuery.data?.[2]?.user?.name}</div>
                        <b style={{ color: COLOR.TEXT_YELLOW }}>{topThreeQuery.data?.[2]?.score} điểm</b>
                    </div>
                </div>
            </div>
            <div style={{ height: "calc(100vh - 330px)", overflowY: "auto" }}>
                {rankingQuery.data?.map((item, index) => {
                    return (
                        <div
                            key={`${item.user?.avatar}${index}`}
                            className="box-shadow flex justify-between items-center m-4 mt-6 p-2 bg-white"
                            style={{ borderRadius: 30 }}
                        >
                            <div className="flex items-center">
                                <div className="mx-3">{index + 4}</div>
                                <Avatar className="mr-3" size={50} src={item.user?.avatar} />
                                <div>{item.user?.name}</div>
                            </div>
                            <b style={{ color: COLOR.TEXT_YELLOW }}>{item.score} Điểm</b>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Rangking;
