import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });


export const API_URL = process.env.DEPLOY_URL;

//category
export const URL_API_FRUITS = `${API_URL}/products/category/fruit`;
export const URL_API_VEGETABLES = `${API_URL}/products/category/vegetable`

export const URL_API_PROCESSEDFOODS = `${API_URL}/products/category/processed-food`