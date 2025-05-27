
import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Settings } from 'lucide-react';
import { Input } from './ui/input';
import { filterSearchResults, groupResultsByType } from '../utils/searchUtils';
import { SearchResult } from '../data/searchData';

interface HeroSearchBarProps {
  className?: string;
}

export default function HeroSearchBar({ className = '' }: HeroSearchBarProps) {
  const [query, setQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    const searchResults = filterSearchResults(value);
    setResults(searchResults);
    setIsDropdownOpen(value.length > 0 && searchResults.length > 0);
  };

  const handleResultClick = (result: SearchResult) => {
    console.log('Selected result:', result);
    setQuery(result.text);
    setIsDropdownOpen(false);
    // TODO: Navigate to appropriate page based on result type
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      console.log('Search submitted:', query);
      // TODO: Handle search submission
    }
  };

  const { services, cities } = groupResultsByType(results);

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
          <Input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for services or cities..."
            className="pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-xl shadow-lg focus:shadow-xl transition-all duration-300 focus:ring-2 focus:ring-[#F6AE2D]"
            onFocus={() => {
              if (query.length > 0 && results.length > 0) {
                setIsDropdownOpen(true);
              }
            }}
          />
        </div>
      </form>

      {/* Dropdown Results */}
      {isDropdownOpen && (services.length > 0 || cities.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-neutral-200 z-50 max-h-96 overflow-y-auto">
          {services.length > 0 && (
            <div className="p-4 border-b border-neutral-100">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="h-4 w-4 text-[#790003]" />
                <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
                  Services
                </h3>
              </div>
              <div className="space-y-1">
                {services.map((service, index) => (
                  <button
                    key={`service-${index}`}
                    onClick={() => handleResultClick(service)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-50 transition-colors duration-200 text-neutral-700 hover:text-[#790003]"
                  >
                    {service.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {cities.length > 0 && (
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-4 w-4 text-[#790003]" />
                <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
                  Cities
                </h3>
              </div>
              <div className="space-y-1">
                {cities.map((city, index) => (
                  <button
                    key={`city-${index}`}
                    onClick={() => handleResultClick(city)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-50 transition-colors duration-200 text-neutral-700 hover:text-[#790003]"
                  >
                    {city.text}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
