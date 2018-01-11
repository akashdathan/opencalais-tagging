# opencalais-tagging
Tag text content using OpenCalais.

[![NPM](https://nodei.co/npm/opencalais-tagging.png?downloads=true&downloadRank=true&stars=true)][npm-url]


[![bitHound Overall Score](https://www.bithound.io/github/akashdathan/opencalais-tagging/badges/score.svg)](https://www.bithound.io/github/akashdathan/opencalais-tagging) [![Inline docs](http://inch-ci.org/github/akashdathan/opencalais-tagging.svg?branch=master&style=shields)](http://inch-ci.org/github/akashdathan/opencalais-tagging) [![Build Status](https://travis-ci.org/akashdathan/opencalais-tagging.svg?branch=master)](https://travis-ci.org/akashdathan/opencalais-tagging) [![Coverage Status](https://coveralls.io/repos/github/akashdathan/opencalais-tagging/badge.svg?branch=master)](https://coveralls.io/github/akashdathan/opencalais-tagging?branch=master)

[![GitHub stars](https://img.shields.io/github/stars/akashdathan/opencalais-tagging.svg?style=social&label=Star)](https://github.com/akashdathan/opencalais-tagging/stargazers) [![GitHub watchers](https://img.shields.io/github/watchers/akashdathan/opencalais-tagging.svg?style=social&label=Watch)](https://github.com/akashdathan/opencalais-tagging/subscription)

[npm-url]: https://npmjs.org/package/opencalais-tagging

## Features

* Tag any text content.
* Obtain language of the content

## Installation

```bash
$ npm install opencalais-tagging
```

## Example

```js

const calais  = require('opencalais-tagging'),
	  content = 'The content to tag',
	  key     = 'opencalais-key'
	  
//If callback is not provided, Promise is returned.
  
calais.tag(content, key, (error, data) => {
	if(error) console.log('Error', error)
	console.log('Result : ', data)
})


```

## Response Data Sample

```js
{ 	
	language: 'English',
	topics:
   		[ 
   			{ label: 'Entertainment_Culture', score: 1 },
     		{ label: 'Politics', score: 0.618 } 
     	],
  	tags:
   		[ 
   			{ tag: 'Competitive intelligence', type: 'SOCIALTAG', relevance: '1' },
     		{ tag: 'Fusion GPS', type: 'SOCIALTAG', relevance: '1' },
     		{ tag: 'Russian interference in the 2016 United States elections', type: 'SOCIALTAG', relevance: '1' },
     		{ tag: 'BuzzFeed', type: 'SOCIALTAG', relevance: '2' },
     		{ tag: 'Michael D. Cohen', type: 'SOCIALTAG', relevance: '2' },
     		{ tag: 'Russia–United Kingdom relations', type: 'SOCIALTAG', relevance: '2' },
     		{ tag: 'United Kingdom–United States relations', type: 'SOCIALTAG', relevance: '2' },
     		{ tag: 'International relations', type: 'SOCIALTAG', relevance: '2' },
     		{ tag: 'Donald Trump–Russia dossier', type: 'SOCIALTAG', relevance: '2' },
     		{ tag: 'Mass media', type: 'SOCIALTAG', relevance: '2' },
     		{ tag: 'Foreign relations', type: 'SOCIALTAG', relevance: '2' },
     		{ tag: 'Newspaper Publishing', type: 'INDUSTRY', relevance: 0 },
     		{ tag: 'Social Media & Networking', type: 'INDUSTRY', relevance: 0.2 },
     		{ tag: 'Beverly Hills', entityType: 'City', type: 'ENTITY', relevance: 0.2 },
     		{ tag: 'the New York Times', entityType: 'Company', type: 'ENTITY', relevance: 0 },
     		{ tag: 'Charles J. Harder', entityType: 'Person', type: 'ENTITY', relevance: 0.2 },
     		{ tag: 'Russia', entityType: 'Country', type: 'ENTITY', relevance: 0.2 },
     		{ tag: 'Trump', entityType: 'Person', type: 'ENTITY', relevance: 0.8 },
     		{ tag: 'Henry Holt', entityType: 'Person', type: 'ENTITY', relevance: 0.2 } 
     	]
   }
```