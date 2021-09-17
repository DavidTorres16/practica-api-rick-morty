import React, { useState, useEffect } from 'react';
import { getData } from '../../Api/AsyncHttpRequest';
import Boton from '../../components/Boton/Boton';
import Card from '../../components/Card/Card';

export default function PrincipalCard() {
  let [allData, setAllData] = useState({});
  let [results, setResults] = useState([]);
  let [searchType, setSearchType] = useState(false);
  let [valueToSearch, setValueToSearch] = useState('Rick Sanchez');
  let [urlGetCharacterBy, setUrlGetCharacterBy] = useState('https://rickandmortyapi.com/api/character/?name=');

 

  useEffect(() => {
    getData(`${urlGetCharacterBy}${valueToSearch}`, setAllData);
  }, [getData, valueToSearch]);

  useEffect(() => {
    setResults(allData?.results);
  }, [setResults, allData]);


  function GetRandomNumber(){
    let resultRandomNum = Math.floor(Math.random() * 617);
    return resultRandomNum;
  }

  return (
    <div className="">
    <section className="d-flex flex-column pt-4 justify-content-center align-items-center">
      <h1 className="text-light">Api Rick And Morthy</h1>
      <input
        className="my-3 fs-5 w-50 rounded-pill border-0 p-2 ps-4"
        placeholder="Buscar..."
        onChange={(event) => setValueToSearch(event.target.value)}
      ></input>
    </section>
    <section className="d-flex flex-wrap justify-content-center align-items-center">
      {results?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </section>
  </div>
  );
}
