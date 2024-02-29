
import { URL_API_PRODUCTS } from "@/constants/api";
import { URL_API_FRUITS, URL_API_PROCESSEDFOODS, URL_API_VEGETABLES } from "@/constants/data";
import axios from "axios";
import { cache } from "react";


export const getFruitCatalog = cache(async () => {
    const fruitResponse = await axios.get(URL_API_FRUITS)
    return fruitResponse.data;
})

export const getVegetablesCatalog = cache(async () => {
    const vegetablesResponse = await axios.get(URL_API_VEGETABLES)
    return vegetablesResponse.data;
})

export const getProcessedFoodsCatalog = cache(async () => {
    const processedFoodsResponse = await axios.get(URL_API_PROCESSEDFOODS)
    return processedFoodsResponse.data;
}) 

export const getProducts=cache(async()=>{
    const {data} = await axios(URL_API_PRODUCTS)
    return data
})