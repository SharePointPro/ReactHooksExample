import React, { useReducer } from "react";
import {RECEIVE_ITEMS, FETCHING_ITEMS} from "./action-types";
import GlobalContext from "./global-context";
import { starwarsItemsReducer } from './reducers';

const GlobalState = props => {
  const [starwarsItemState, dispatch] = useReducer(starwarsItemsReducer, []);

  async function fetchAllItems(searchStr) {
    
    dispatch({    
      type: FETCHING_ITEMS
    });
    const endpoints = [
      `https://swapi.co/api/people/?search=${searchStr}`,
      `https://swapi.co/api/films/?search=${searchStr}`,
      `https://swapi.co/api/starships/?search=${searchStr}`,
      `https://swapi.co/api/species/?search=${searchStr}`,
      `https://swapi.co/api/planets/?search=${searchStr}`
    ];
    var endpointResponse = await Promise.all(
      endpoints.map(url => fetch(url).then(resp => resp.json()))
    );
    var items = prepareItems(endpointResponse);
    dispatch({    
      type: RECEIVE_ITEMS,
      items,
      receivedAt: Date.now()
    });
  }

  function prepareItems(array) {
    let combined = [];
    array.forEach(item => {
      combined = combined.concat(item.results);
    });

    return combined
      .map(item => {
        if (Object.hasOwnProperty.call(item, "episode_id")) {
          return {
            type: "film",
            name: item.title,
            episode_id: item.episode_id,
            director: item.director,
            producer: item.producer,
            release_date: item.release_date
          };
        } else if (Object.hasOwnProperty.call(item, "model")) {
          return {
            type: "starship",
            name: item.name,
            model: item.model,
            hyperdrive_rating: item.hyperdrive_rating,
            manufacturer: item.manufacturer
          };
        } else if (Object.hasOwnProperty.call(item, "classification")) {
          return {
            type: "species",
            name: item.name,
            classification: item.classification,
            designation: item.designation,
            language: item.language
          };
        } else if (Object.hasOwnProperty.call(item, "orbital_period")) {
          return {
            type: "planet",
            name: item.name,
            gravity: item.gravity,
            terrain: item.terrain,
            population: item.population
          };
        }
        return {
          type: "person",
          name: item.name,
          gender: item.gender,
          height: item.height,
          mass: item.mass
        };
      })
      .sort(compareNames);
  }

  function compareNames(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  return (
    <GlobalContext.Provider
      value={{
        starwarsItems: starwarsItemState,
        fetchAllItems: fetchAllItems
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
