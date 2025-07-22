


import React from 'react';
import { Filter } from 'lucide-react';

const BlogFilter = ({ tags, selectedTag, onTagChange, searchTerm, onSearchChange }) => {
  return (
    <div className="mb-10 space-y-8">

      {/* Title */}
      <div className="flex items-center space-x-3">
        <Filter className="w-5 h-5 text-gray-500" />
        <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">Filter Posts</h3>
      </div>

      {/* Search */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-5 py-3 border border-gray-400 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#f6bc6d] transition placeholder:text-gray-400"
        />
      </div>

      {/* Tags */}
      <div className="flex overflow-x-auto gap-2 pb-1">
        <button
          onClick={() => onTagChange('All')}
          className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition
            ${selectedTag === 'All' 
              ? 'bg-[#f6bc6d] text-white' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
          `}
        >
          All
        </button>

        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagChange(tag)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition
              ${selectedTag === tag
                ? 'bg-[#f6bc6d] text-white '
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
            `}
          >
            <span className='paragraph-font tracking-wide'>{tag}</span>
          </button>
        ))}
      </div>

    </div>
  );
};

export default BlogFilter;
