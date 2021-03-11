import { useState,useEffect } from "react";
import { fetchCovidResults } from "../../../utils/network";


export const useFetch = ()=>{

   const [isLoading,setIsLoading] =  useState(false);
   const [hasError, setHasError] = useState(false);
   const [stateWiseData,setStateWiseData] = useState([]);
   const [districtWiseData,setDistrictWiseData] = useState({});

    useEffect( ()=>{
      
        async function fetchData()
        {
        try {
            setIsLoading(true);
            const results = await  fetchCovidResults();
            const {data} = await results;
            let districtWiseArray = {};
           const stateWiseFormatted =  Object.keys(data).map((state,index)=>{
                const {districtData} = data[state];
                districtWiseArray[state] = []
                const distWiseSum = Object.keys(districtData).reduce((acc,s,ind)=>{
                    const { confirmed,recovered,deceased} = districtData[s]||{};
                    acc.confirmed+=confirmed;
                    acc.deceased+=deceased;
                    acc.recovered += recovered;
                    districtWiseArray[state].push({district:s,confirmed,recovered,deceased,key:ind})
                    return acc
                },{
                    confirmed:0,
                    recovered:0,
                    deceased:0
                })
               
                   return    {
                       key:index,
                       state:state,
                       ...distWiseSum
                   }              
               
            })

            setStateWiseData(stateWiseFormatted);
            setDistrictWiseData(districtWiseArray);
        }
        catch(error)
        {
            setHasError(true);
            console.error(error);
        }


    }

    fetchData();
    },[])

    return [isLoading,stateWiseData,districtWiseData,hasError]


}