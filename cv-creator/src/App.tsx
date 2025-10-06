import { useEffect, useState } from "react";
import { requestData } from "./utils/fetch-data";

export default function App() {
  const [cardData, setCardData] = useState<Array<any>>([]);

  useEffect(() => {
    requestData<Array<any>>("/overview?username=berkant-kazangirler").then(
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
