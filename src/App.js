import { useState } from "react";

const arr = [{ date: "2022-09-01", views: 100, article: "Article 1" }, { date: "2023-09-01", views: 100, article: "Article 1" }, { date: "2023-09-02", views: 150, article: "Article 2" }, { date: "2023-09-02", views: 120, article: "Article 3" }, { date: "2020-09-03", views: 200, article: "Article 4" }]


function App() {
  const [data, setData] = useState(arr);

  const srtV = () => {
    const sortedData = [...data].sort((a, b) => b.views - a.views);
    setData(sortedData);
  }

  const srtD = () => {
    const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    setData(sortedData);
  };


  return (
    <div >
      <h1>Date and Views Table</h1>
      <button onClick={srtD}>Sort by Date</button>
      <button onClick={srtV}>Sort by Views</button>

      <table >
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {data.map(item => (
          <tr>
            <td>{item.date}</td>
            <td>{item.views}</td>
            <td>{item.article}</td>
          </tr>
        ))}


      </table>
    </div>
  );
}

export default App;
