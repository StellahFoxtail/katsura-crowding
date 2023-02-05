import React, { useState } from 'react';
import Notice from './Notice';
import PopularityChart from "./PopularityChart"

function MyDropdown() {
  const [selectedOption, setSelectedOption] = useState('AMPM18-KJ016');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="AMPM18-KJ008">Cクラスター管理室</option>
        <option value="AMPM18-KJ009">C1ビル入口</option>
        <option value="AMPM18-KJ011">B クラスター管理室</option>
        <option value="AMPM18-KJ012">桂学生図書館</option>
        <option value="AMPM18-KJ013">A4ビル裏口</option>
        <option value="AMPM18-KJ014">P3Pパーキング前</option>
        <option value="AMPM18-KJ015">ブーランジェリー セリ ベーカリー</option>
        <option value="AMPM18-KJ010">メインカフェテリア内</option>
        <option value="AMPM18-KJ016">カフェテリアメインエントランス</option>
        <option value="AMPM18-KJ017">メインカフェテリア出口</option>
      </select>
      <Notice location={selectedOption}/>
      <PopularityChart location={selectedOption}/>
    </div>
  );
}

export default MyDropdown;
