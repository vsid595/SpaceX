import React from 'react';
import '../styles/CardComponent.css';

const Programs = ({
  data,
  years,
  filterYear,
  filterSuccess,
  filterLaunchStatus,
  initialData,
}) => {
  const original = data.length > 0 ? data : initialData;
  return (
    <div className="container" style={{ display: 'flex' }}>
      <div className="col-md">
        <h1>Filters</h1>
        <h6> Filter by Launch</h6>
        <div className="col" style={{ display: 'flex' }}>
          <button
            id="but"
            style={{ marginRight: 10 }}
            className="btn btn-success"
            onClick={() => {
              filterSuccess(true);
            }}
          >
            True
          </button>
          <button
            style={{ marginRight: 5 }}
            className="btn btn-info"
            onClick={() => {
              filterSuccess(false);
            }}
          >
            False
          </button>
        </div>
        <h6> Filter by Landing</h6>
        <button
          style={{ marginRight: 10 }}
          className="btn btn-success"
          onClick={() => {
            filterLaunchStatus(true);
          }}
        >
          True
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            filterLaunchStatus(false);
          }}
        >
          False
        </button>
        <h6> Filter by Year</h6>
        {years.map((y) => (
          <div
            className="col"
            style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => {
                filterYear(y);
              }}
            >
              {y}
            </button>
          </div>
        ))}
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridColumn: 1 }}>
          <div className="row">
            {original.map((program) => (
              <div className="items">
                <img
                  className="img"
                  src={program.links.mission_patch_small}
                  alt="Loading"
                ></img>
                <h3>Mission Name: {program.mission_name}</h3>
                <h5>Launch Year : {program.launch_year}</h5>
                <h5>Succesful Launch : {String(program.launch_success)}</h5>
                <h5>
                  Succesful Landing :
                  {String(program.rocket.first_stage.cores[0].land_success)}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
