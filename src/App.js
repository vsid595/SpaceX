import React, { useEffect, useState } from 'react';
import Programs from './Components/Programs';
import axios from 'axios';
import './styles/CardComponent.css';

const App = () => {
  const [data, setData] = useState([]);
  const [dataToShow, setDataToShow] = useState([]);
  const [year, setYear] = useState([]);

  useEffect(() => {
    async function getPrograms() {
      const s = await axios.get(
        `https://api.spacexdata.com/v3/launches?limit=100`
      );
      setData(s.data);
      const f = data.map((y) => y.launch_year);
      const k = new Set(f);
      setYear([...k]);
    }
    getPrograms();
  }, [data]);

  const filterYear = (e) => {
    setDataToShow(data.filter((s) => s.launch_year === e));
  };

  const filterSuccessStatus = (e) => {
    console.log(e);
    setDataToShow(data.filter((s) => s.launch_success === e));
  };

  const filterLaunchstatus = (e) => {
    console.log(e);
    setDataToShow(
      data.filter((s) => s.rocket.first_stage.cores[0].land_success === e)
    );
  };

  return (
    <>
      <h1>SpaceX Launch Programs</h1>
      <Programs
        data={dataToShow}
        years={year}
        filterYear={filterYear}
        filterSuccess={filterSuccessStatus}
        filterLaunchStatus={filterLaunchstatus}
        initialData={data}
      />
      {/* <button
        onClick={() => {
          getYear();
        }}
      >
        filter
      </button> */}
    </>
  );
};

export default App;
