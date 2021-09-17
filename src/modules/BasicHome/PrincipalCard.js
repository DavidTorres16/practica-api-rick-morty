import React, { useState, useEffect } from 'react';
import { getData } from '../../Api/AsyncHttpRequest';

export default function PrincipalCard() {
  let [allData, setAllData] = useState({});
  let [results, setResults] = useState([]);

  let urlGetCharacterByName =
    'https://rickandmortyapi.com/api/character/';

    console.log(urlGetCharacterByName);

  useEffect(() => {
    getData(urlGetCharacterByName, setAllData);
  }, [getData]);

  useEffect(() => {
    setResults(allData?.results);
  }, [setResults, allData]);

  

  return (
   
    <div>
      
      {results?.map((item) => (
        
        <img src ={item.image}></img>
      ))}
    </div>
  );
}
