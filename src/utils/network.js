import axios from "axios"
const state_district_wise_url = "https://api.covid19india.org/state_district_wise.json"
export const fetchCovidResults = ()=>{
       return  axios.get(state_district_wise_url);
}