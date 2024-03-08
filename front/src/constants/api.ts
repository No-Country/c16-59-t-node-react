export const API_URL = process.env.DEPLOY_URL;

//Products
export const URL_API_PRODUCTS = `${API_URL}/products`;

//category
export const URL_API_FRUITS = `${API_URL}/products/category/fruit`;
export const URL_API_VEGETABLES = `${API_URL}/products/category/vegetable`;

export const URL_API_PROCESSEDFOODS = `${API_URL}/products/category/processed-food`;

//login auth
export const URL_AUTH_LOGIN = `${process.env.DEPLOY_URL_PARSER}/auth/login`;

//delivery options
export const URL_DELIVERY = `${process.env.DEPLOY_URL_PARSER}/deliveries`;
