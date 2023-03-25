import React from 'react';
import google from '../../../Assets/google.png';
import atlassian from '../../../Assets/atlassian.png';
import dropbox from '../../../Assets/dropbox.png';
import shopify from '../../../Assets/shopify.png';
import slack from '../../../Assets/slack.png';

import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="alt image" />
    </div>
    <div>
      <img src={atlassian} alt="alt image" />
    </div>
    <div>
      <img src={dropbox} alt="alt image" />
    </div>
    <div>
      <img src={shopify} alt="alt image" />
    </div>
    <div>
      <img src={slack} alt="alt image" />
    </div>
  </div>
);

export default Brand;