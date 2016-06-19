import _ from 'lodash'

const API_KEY = '6a78596d062df78380eff5944c4e5567'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&mode=json&appid=${API_KEY}&lang=zh_cn&units=metric`


export default function fetchWeather(lat,lon){
  const url = `${ROOT_URL}&lat=${lat}&lon=${lon}`
  return fetch(url)
    .then((res)=>{
      return res.json()
    })
    .then((json)=>{
      return {
        city: json.city.name,
        temp: json.list[0].main.temp,
        descr: json.list[0].weather[0].description
      }
    })
}