import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from './components/Banner';
import { useState } from 'react';
import satData from './components/satData';

function App() {
  // State to manage the displayed satellite data
  const [sat, setSat] = useState(satData);

  // Variable to hold unique orbit types for generating filter buttons
  const displaySats = [...new Set(satData.map(data => data.orbitType))];

  // Function to filter satellites by their orbit type
  const filterByType = (orbitType) => {
    const filteredSats = satData.filter(satellite => satellite.orbitType === orbitType);
    setSat(filteredSats);
  };

  return (
    <div>
      <Banner />
      <Buttons filterByType={filterByType} displaySats={displaySats} setSat={setSat} />
      <Table sat={sat} />
    </div>
  );
}

export default App;