export enum Registration {
  APP_ID = 'e8287f73',
  APP_KEY = 'd9d8c8f35811c9711d6af44a8aa94984'
}

export enum Domain {
  BASE = 'https://api.edamam.com',
  NUTRIENTS = '/api/food-database/v2/nutrients',
  PARSER = '/api/food-database/v2/parser',
  SEARCH = '/search'
}

export const apiParams = {
  app_id: Registration.APP_ID,
  app_key: Registration.APP_KEY,
};
