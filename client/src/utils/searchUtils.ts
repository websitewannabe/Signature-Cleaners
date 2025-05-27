
import { SERVICES, CITIES, SearchResult } from '../data/searchData';

export const filterSearchResults = (query: string): SearchResult[] => {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Filter services
  const matchingServices = SERVICES.filter(service =>
    service.toLowerCase().includes(normalizedQuery) ||
    service.toLowerCase().startsWith(normalizedQuery)
  );

  // Filter cities
  const matchingCities = CITIES.filter(city =>
    city.toLowerCase().includes(normalizedQuery) ||
    city.toLowerCase().startsWith(normalizedQuery)
  );

  // Add services to results
  matchingServices.forEach(service => {
    results.push({ text: service, type: 'service' });
  });

  // Add cities to results
  matchingCities.forEach(city => {
    results.push({ text: city, type: 'city' });
  });

  return results;
};

export const groupResultsByType = (results: SearchResult[]) => {
  const services = results.filter(result => result.type === 'service');
  const cities = results.filter(result => result.type === 'city');
  
  return { services, cities };
};
