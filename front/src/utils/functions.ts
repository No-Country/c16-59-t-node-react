import axios from "axios";
import { cache } from 'react';


export const getFruitCatalog = cache(async () => {
    const fruitResponse = await axios.get('https://api.npoint.io/893e0d72008e34a64215')

    return fruitResponse.data;
})

export const getVegetablesCatalog = cache(async () => {
    const vegetablesResponse = await axios.get('https://api.npoint.io/4098637fc34461f87419')

    return vegetablesResponse.data;
})

export const getProcessedFoodsCatalog = cache(async () => {
    const processedFoodsResponse = await axios.get('https://api.npoint.io/13b8990f17bef1fcc772')

    return processedFoodsResponse.data;
}) 