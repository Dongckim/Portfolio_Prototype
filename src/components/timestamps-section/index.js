import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import SectionHeader from '../section-header';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const TimeStampsSection = ({ timestamps }) => {
  console.log(timestamps);
  return (
    <div className="timestamps-section-wrapper">
      <div className="timestamps-section">
        <SectionHeader title="Timestamps" />
        <div className="body">
          {timestamps.map((timestamp, index) => (
            <div className="timestamp" key={index}>
              <div className="date">{timestamp.date}</div>
              <div className="activity">
                {timestamp.activity}&nbsp;
                {timestamp.links && <IconButtonBar links={timestamp.links} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeStampsSection;
