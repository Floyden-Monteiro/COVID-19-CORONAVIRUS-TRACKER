import React, {useEffect, useState} from "react";
import '../components/covid.css'

const Covid = () => {

    const [covidData , setData ] = useState([]);


    const getCovidData = async () =>{
            try{
                    const res = await fetch('https://api.covid19india.org/data.json');
                    const data = await res.json();
                    console.log(data.statewise[0]);
                    setData(data.statewise[0]);
            }catch(err){
                    console.log(err);
            }
    }





  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
    <section>
      <h1>🔴 LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      <ul className="card__container">
      <li className="card item1">
          <div className="card__main">
                <div className="card__inner">
                    <p className="card__name m">COUNTRY</p>
                    <p className="card__total">INDIA</p>
                </div>
          </div>
      </li>
      <li className="card item2">
          <div className="card__main">
                <div className="card__inner">
                    <p className="card__total r">RECOVERED</p>
                    <p className="card__name m">{covidData.recovered}</p>
                </div>
          </div>
      </li>
      <li className="card item3">
          <div className="card__main ">
                <div className="card__inner">
                    <p className="card__total r">CONFIRMED</p>
                    <p className="card__name m">{covidData.confirmed}</p>
                </div>
          </div>
      </li>
    
      
      <li className="card item4">
          <div className="card__main">
                <div className="card__inner">
                    <p className="card__total">DEATHS</p>
                <p className="card__name m">{covidData.deaths}</p>
                </div>
          </div>
      </li>
      
      <li className="card item5">
          <div className="card__main ">
                <div className="card__inner">
                   
                    <p className="card__total">ACTIVE</p>
                <p className="card__name m">{covidData.active}</p>
                </div>
          </div>
      </li>
      <li className="card item6">
          <div className="card__main cool ">
                <div className="card__inne ">
                    <p className="card__total">LAST UPDATE</p>
                <p className="card__name m">{covidData.lastupdatedtime}</p>
                </div>
          </div>
      </li>
      </ul>
      </section>
    </>
  );
};

export default Covid;
