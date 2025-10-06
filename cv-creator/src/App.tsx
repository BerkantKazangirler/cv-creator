import { useEffect, useState } from "react";
import { requestData } from "./utils/fetch-data";
import type { OverviewI } from "./types/overview";

export default function App() {
  const [cardData, setCardData] = useState<OverviewI>({} as OverviewI);

  useEffect(() => {
    requestData<OverviewI>("/overview?username=berkant-kazangirler").then(
      (data) => {
        setCardData(data);
      }
    );
  }, []);

  return (
    <div className="w-screen h-screen bg-red-400">
      <button onClick={() => console.log(cardData)}>asd</button>
    </div>
  );
}
