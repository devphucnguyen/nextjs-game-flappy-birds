"use client";

import Navigation from "@/component/Navigation";
import { COLOR } from "@/const/color";
import { Avatar, List } from "antd";

const Rangking = () => {
    return (
        <>
            <Navigation />
            <div className="" style={{ backgroundColor: COLOR.BLUE, borderBottomRightRadius: "35px", borderBottomLeftRadius: "35px" }}>
                <div className="text-center py-3" style={{ fontSize: 25 }}>
                    Bảng xếp hạng
                </div>
                <div className="flex pb-8 p-2">
                    <div className="flex justify-center flex-col items-center" style={{ width: "30%", position: "relative", marginTop: 80 }}>
                        <Avatar
                            size={80}
                            icon={
                                <img
                                    alt="avt"
                                    src="https://img.freepik.com/premium-photo/toy-figure-person-with-purple-hair-purple-hair_784625-10954.jpg"
                                />
                            }
                        />
                        <div className="mt-2">Tin ho</div>
                        <b style={{ color: COLOR.TEXT_YELLOW }}>200 điểm</b>
                    </div>

                    <div className="flex justify-center flex-col items-center" style={{ width: "40%" }}>
                        <Avatar
                            size={120}
                            icon={<img alt="avt" src="https://img.freepik.com/free-photo/soldier-boy-character-videogame_71767-102.jpg" />}
                        />
                        <div className="mt-2">Dev Phuc Nguyen</div>
                        <b style={{ color: COLOR.TEXT_YELLOW }}>200 điểm</b>
                    </div>
                    <div className="flex justify-center flex-col items-center" style={{ width: "30%", position: "relative", marginTop: 80 }}>
                        <Avatar
                            size={80}
                            icon={
                                <img
                                    alt="avt"
                                    src="https://img.freepik.com/premium-photo/close-up-cartoon-character-wearing-helmet-jacket-generative-ai_974546-31553.jpg"
                                />
                            }
                        />
                        <div className="mt-2">Van Tuan</div>
                        <b style={{ color: COLOR.TEXT_YELLOW }}>200 điểm</b>
                    </div>
                </div>
            </div>

            {[
                { name: "Nguyễn văn a", ranking: 2, point: 800 },
                { name: "Nguyễn văn a", ranking: 2, point: 700 },
                { name: "Nguyễn văn a", ranking: 2, point: 600 },
                { name: "Nguyễn văn a", ranking: 2, point: 500 },
                { name: "Nguyễn văn a", ranking: 2, point: 400 },
                { name: "Nguyễn văn a", ranking: 2, point: 300 },
                { name: "Nguyễn văn a", ranking: 2, point: 200 },
                { name: "Nguyễn văn a", ranking: 2, point: 100 },
            ].map((item, index) => {
                return (
                    <div
                        key={`${item.name}${index}`}
                        className="box-shadow flex justify-between items-center m-4 mt-6 p-2"
                        style={{ borderRadius: 30 }}
                    >
                        <div className="flex items-center">
                            <div className="mx-3">{index + 3}</div>
                            <Avatar size={50} src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />
                            <div>{item.name}</div>
                        </div>
                        <b style={{ color: COLOR.TEXT_YELLOW }}>{item.point} Điểm</b>
                    </div>
                );
            })}
        </>
    );
};

export default Rangking;
