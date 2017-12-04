import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Card from '../components/Card';
import Detail from '../components/Detail';



let games =
  {
    "name" : "Xbox",
    "title": "Title of product, Title of product, Title of product",
    "description": `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    "logo" : "http://via.placeholder.com/250x350",
    "classification" : "http://via.placeholder.com/250x350",
    "production" : 'Ubisoft Montreal',
    "distribution" : 'Ubisoft',
    "gender" : 'Adventure',
    "date" : '01/01/2017',
    "website": "http://www.google.com",
    "platforms": [
      {
        "name": "Xbox",
        "logo": "http://via.placeholder.com/250x350"
      },
      {
        "name": "PS4",
        "logo": "http://via.placeholder.com/250x350"
      }
    ]
  }
;

storiesOf('Exchange', module)
  .add('Cards', () => <Card onClick={action('clicked')} image="http://via.placeholder.com/250x350" title="Lorem Ipsum is simply dummy text of the printing andLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"/>)
  .add('Details', () => <Detail game={games}/>);
