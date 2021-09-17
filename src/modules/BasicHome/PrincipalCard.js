import React, { useState, useEffect } from 'react';
import { getData } from '../../api/AsyncHttpRequest';
import Boton from '../../components/Boton/Boton';
import Card from '../../components/Card/Card';

export default function PrincipalCard() {
  let [allData, setAllData] = useState({});
  let [results, setResults] = useState([]);
  let [searchType, setSearchType] = useState(false);
  let [valueToSearch, setValueToSearch] = useState('Rick Sanchez');
  let [urlGetCharacterBy, setUrlGetCharacterBy] = useState('https://rickandmortyapi.com/api/character/?name=');

  useEffect(() => {
    if (searchType === true) {
      setValueToSearch = GetRandomNumber()
      setUrlGetCharacterBy = 'https://rickandmortyapi.com/api/character/'
      console.log(setValueToSearch,setUrlGetCharacterBy)
    }
  },[setUrlGetCharacterBy,setValueToSearch])
  


  console.log(urlGetCharacterBy);

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
    <section className="">
      <input
        className=""
        placeholder="Buscar..."
        onChange={(event) => setValueToSearch(event.target.value)}
      ></input>
    </section>
    <section className="">
      {results?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </section>
    <Boton onClick={(event) => setSearchType(true)}/>
  </div>
  );
}
