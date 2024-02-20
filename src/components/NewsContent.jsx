import React, { useState } from 'react';
import { NEWS_ITEMS } from '../data.js'; 
import './NewsContent.css';

const NewsContent = () => {
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);

  const toggleItem = (index, event) => {
    // Prevents the link from being followed when the item is clicked to expand/collapse the description
    if (event.target.tagName !== 'A' && event.target.tagName !== 'IMG') {
      setExpandedItemIndex(expandedItemIndex === index ? null : index);
    }
  };

  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {NEWS_ITEMS.map((item, index) => (
          <li key={index} className="news-item" onClick={(e) => toggleItem(index, e)}>
            <div className="news-item-content">
              <div className="news-content">
                {item.link ? (
                  <>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <img src={item.icon} alt="Icon" style={{ width: '25px', marginRight: '10px' }} />
                    </a>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-title-link">
                      {item.title}
                    </a>
                  </>
                ) : (
                  <>
                    <img src={item.icon} alt="Icon" style={{ width: '25px', marginRight: '10px' }} />
                    <span>{item.title}</span>
                  </>
                )}
              </div>
              <div className="news-date">{item.date}</div>
            </div>
            {expandedItemIndex === index && item.description && (
              <div className="news-description">
                <p className="news-additional-info">{item.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsContent;