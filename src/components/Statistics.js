import React from 'react';
import "./Statistics.css";

function Statistics() {
    return (
      <div className="Statistics">
          <div className="Statistics-item">
              <div>Today</div>
              <div className="Statistics-item-count">10</div>
          </div>
          <div className="Statistics-item">
              <div>Tomorrow</div>
              <div className="Statistics-item-count">2</div>
          </div>
          <div className="Statistics-item">
              <div>Weekly</div>
              <div className="Statistics-item-count">22</div>
          </div>
      </div>
    );
}

export default Statistics;