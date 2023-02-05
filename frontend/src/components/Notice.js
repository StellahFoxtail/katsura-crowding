import * as React from 'react';

import Exclamation from "../images/exclamation.svg"

const notice_sensors = ["AMPM18-KJ010", "AMPM18-KJ016", "AMPM18-KJ017"];

const Notice = ({ location }) => {
  const time = new Date();
  var hourNow = time.getHours();
  var message = null;

  if (notice_sensors.includes(location)){
    message = "カフェテリアセレーネはランチタイムに11:00から14:00まで営業しています。"
  } else if (location == "AMPM18-KJ008") {
    message = "Cクラスターアドニストレーションオフィスの営業時間は9:00〜17:00です。"
  } else if (location == "AMPM18-KJ009") {
    message = "C1棟入場は6:00AMからオープンし、18:00以降は大学生カードでアクセスできます。"
  } else if (location == "AMPM18-KJ011") {
    message = "Bクラスター管理室の営業時間は9:00〜17:00です。"
  } else if (location == "AMPM18-KJ012") {
    message = "桂本館は9:00から21:00まで開館しています。"
  } else if (location == "AMPM18-KJ013") {
    message = "A3棟とA4棟の間のクラスターのP3P駐車場は24時間営業です。"
  } else if (location == "AMPM18-KJ014") {
    message = "A4リアエントランスは24時間オープンの近距離ルート 桂イノベーションパーク前バス停からのアクセス"
  } else if (location == "AMPM18-KJ015") {
    message = "ブーランジェリーセリベーカリーは、月曜日から土曜日の午前8:00から午後3:00まで営業しています。"
  }

  console.log("Message: ", message)
  if (message != null) {
    return (
      <div className="flex gap-1 p-2 bg-yellow-200 rounded-lg items-center">
        <img
          className="inline h-4"
          src={Exclamation}
          alt="Exclamation"
        />
        <p className="text-xs text-gray-800 font-medium">{message}</p>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  } 
};
 
export default Notice;
