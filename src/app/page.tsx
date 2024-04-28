"use client";

import GameMobile from "@/component/GameMobile";

export default function Home() {
    // const [device, setDevice] = useState<"mobile" | "desktop">();

    //

    // if (!device) return "loading...";
    // if (device === "desktop") return <GameDesktop />;

    return <GameMobile />;
}
