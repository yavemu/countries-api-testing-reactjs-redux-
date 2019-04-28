import React, { Fragment } from "react";

function Page(props) {
  return (
    <Fragment>
      {props.countries.length > 0 ? (
        <ul>
          {props.countries.map((country, index) => {
            return (
              <li key={index}>
                {country.name}
                <b
                  onClick={() => {
                    props.onClick(country.alpha2Code);
                  }}
                >
                  {" "}
                  [Ver mas]
                </b>
              </li>
            );
          })}
        </ul>
      ) : (
        <b>There are no countries</b>
      )}
    </Fragment>
  );
}

export default Page;
