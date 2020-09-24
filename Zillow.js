import axios from 'axios';
import React, {useState} from 'react';
require('./secrets')

let rentals;
export const zillowAPI = () =>  {
const apiKey = process.env.REALTOR_API_KEY
return axios({
    "method":"GET",
    "url":"https://realtor.p.rapidapi.com/properties/v2/list-for-rent",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"realtor.p.rapidapi.com",
    "x-rapidapi-key":apiKey,
    "useQueryString":true
    },"params":{
    "beds_min":"1",
    "price_max":"2500",
    "sort":"relevance",
    "baths_min":"1",
    "city":"Jersey City",
    "state_code":"NJ",
    "limit":"2",
    "offset":"0"
    }
    })
    .then((response)=>{
    //   console.log("RES data Property=>",response["data"]["properties"])
    //   console.log("RES P Details=>",response["data"]["properties"].map((prop, idx )=> {return [idx, `${prop["address"]["line"]}, ${prop["address"]["city"]}, ${prop["address"]["state_code"]}`, prop["photos"][0]["href"], `${prop["community"]["price_min"]} - ${prop["community"]["price_max"]}`, `${prop["community"]["beds_min"]} - ${prop["community"]["beds_max"]}`]}))
    const rentDetails = response["data"]["properties"].map((prop, idx )=> {return {"id": idx, "address":`${prop["address"]["line"]}, ${prop["address"]["city"]}, ${prop["address"]["state_code"]}`, "image": prop["photos"][0]["href"], "price range": `${prop["community"]["price_min"]} - ${prop["community"]["price_max"]}`, "beds":`${prop["community"]["beds_min"]} - ${prop["community"]["beds_max"]}`}})
    console.log("RES P Details=>", rentDetails)
      rentals = rentDetails
    return response
    })
    .catch((error)=>{
      console.log(error)
    })

}



export const rentalProps = () => {
    const forRent = rentals
}



export default [
    {
        id: "1",
        price: "1500",
        address: "10 Greene st, Jersey City, NJ",
        image: "https://ds1.cityrealty.com/img/1655f4e3904fb79cb987ab7755d2b3f4b8f37f88+736++0+60/1-city-point.jpg",
        beds: "1",
        baths: "1",
        description: ""
    },{
        id: "2",
        price: "2500",
        address: "110 1st st, Jersey City, NJ",
        image: "https://images1.apartments.com/i2/OYexjpsYBEI-DceI1wLgqdsPpAz-Zr-v7LOmvadrWwQ/111/the-one-jersey-city-nj-living-room.jpg",
        beds: "1",
        baths: "1",
        description: ""
    },{
        id: "3",
        price: "1800",
        address: "100 Clifton Pl, Jersey City, NJ",
        image: "https://images1.apartments.com/i2/-WUE0ZLE5kTGgkGXad1fbsMKo_cC7qnW6yq0mYszVw0/111/the-beacon-jersey-city-nj-primary-photo.jpg",
        beds: "1",
        baths: "1",
        description: ""
    },{
        id: "4",
        price: "2300",
        address: "25 Park Ln S, Jersey City, NJ",
        image: "https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/Ellipse%20two%20bedroom.jpeg",
        beds: "1",
        baths: "1",
        description: ""
    },{
        id: "5",
        price: "2100",
        address: "2 2nd st, Jersey City, NJ",
        image: "https://28nwgk2wx3p52fe6o9419sg5-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/jersey-city-apartments-for-rent-m2-marbella-2.jpg",
        beds: "1",
        baths: "1",
        description: ""
    },{
        id: "6",
        price: "1700",
        address: "1 2nd st, Jersey City, NJ",
        image: "https://i.pinimg.com/originals/8b/22/88/8b2288bd1cd4b57c3ed3c88d4f2712cd.jpg",
        beds: "1",
        baths: "1",
        description: ""
    },{
        id: "7",
        price: "2500",
        address: "70 Christopher Columbus Dr, Jersey City, NJ",
        image: "https://photonet.hotpads.com/search/listingPhoto/RentCafe/477418/0001_1053726393_large.jpg",
        beds: "1",
        baths: "1",
        description: ""
    },{
        id: "8",
        price: "2800",
        address: "33 Hudson St, Jersey City, NJ",
        image: "https://photonet.hotpads.com/search/listingPhoto/RentCafe/1116539/0040_1934101756_large.jpg",
        beds: "1",
        baths: "1.5",
        description: ""
    },{
        id: "9",
        price: "2300",
        address: "18 Park Ave, Jersey City, NJ",
        image: "https://photonet.hotpads.com/search/listingPhoto/RentCafe/187928/0006_313593657_large.jpg",
        beds: "1",
        baths: "1",
        description: ""
    },{
        id: "10",
        price: "3100",
        address: "33 Park View Ave, Jersey City, NJ",
        image: "https://photonet.hotpads.com/search/listingPhoto/BozzutoMITS/809/0017_19404750_large.jpg",
        beds: "2",
        baths: "2",
        description: ""
    },{
        id: "11",
        price: "1950",
        address: "331 Pine st, Jersey City, NJ",
        image: "https://photonet.hotpads.com/search/listingPhoto/Postlets/12jdehvkp3yd4/0015_314864843_large.jpg",
        beds: "1",
        baths: "1",
        description: ""
    }
]