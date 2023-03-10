import React from "react";

const Personaje = ({ personaje }) => {
  const { name, species, status, gender, image } = personaje;
  return (
    <div className="col-md-4 mb-2">
      <div className="card">
        <img src={image} alt={`imagen-${name}`} className="card-img-top" />
        <div className="card-body">
          <h5>
            {name} - {gender}
          </h5>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
