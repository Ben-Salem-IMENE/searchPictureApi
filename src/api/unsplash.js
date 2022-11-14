import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL :'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID auOIFO_MeK20WSLUsL5pk1ao-tfcmQpxT39I6660VUU',
      }
});