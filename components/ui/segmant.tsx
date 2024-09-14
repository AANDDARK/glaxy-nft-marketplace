// components/Segment.js
import React, { useState } from 'react';
import '@/components/style/segmant.css'

const Segment = ({ segments, onSegmentChange }) => {
  const [activeSegment, setActiveSegment] = useState(segments[0].value);

  const handleSegmentClick = (value) => {
    setActiveSegment(value);
    if (onSegmentChange) {
      onSegmentChange(value);
    }
  };

  return (
    <div className="segment-container">
      <div className="segment-controls">
        {segments.map((segment) => (
          <div
            key={segment.value}
            className={`segment-button ${activeSegment === segment.value ? 'active' : ''}`}
            onClick={() => handleSegmentClick(segment.value)}
          >
            {segment.label}
          </div>
        ))}
      </div>
      <div className="segment-content">
        {/* You can conditionally render content based on activeSegment */}
      </div>
    </div>
  );
};

export default Segment;
