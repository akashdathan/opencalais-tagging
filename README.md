# opencalais-tagging

[![NPM](https://nodei.co/npm/opencalais-tagging.png?downloads=true&downloadRank=true&stars=true)][npm-url]


[![bitHound Overall Score](https://www.bithound.io/github/akashdathan/opencalais-tagging/badges/score.svg)](https://www.bithound.io/github/akashdathan/opencalais-tagging) [![Build Status](https://travis-ci.org/akashdathan/opencalais-tagging.svg?branch=master)](https://travis-ci.org/akashdathan/opencalais-tagging) [![NPM version](http://img.shields.io/npm/v/gm-palette.svg?style=flat-square)](https://www.npmjs.org/package/opencalais-tagging) [![NPM license](http://img.shields.io/npm/l/gm-palette.svg?style=flat-square)](https://www.npmjs.org/package/opencalais-tagging)

[![GitHub stars](https://img.shields.io/github/stars/akashdathan/opencalais-tagging.svg?style=social&label=Star)](https://github.com/akashdathan/opencalais-tagging/stargazers) [![GitHub watchers](https://img.shields.io/github/watchers/akashdathan/opencalais-tagging.svg?style=social&label=Watch)](https://github.com/akashdathan/opencalais-tagging/subscription)

[npm-url]: https://npmjs.org/package/opencalais-tagging

>Open Calais attaches intelligent metadata-tags to your unstructured content, enabling powerful text analytics. The Open Calais natural language processing engine automatically analyzes and tags your input files in such a way that your consuming application can both easily pinpoint relevant data, and effectively leverage the invaluable intelligence and insights contained within the text. Please refer to the conplete documentation [here](http://www.opencalais.com/wp-content/uploads/folder/ThomsonReutersOpenCalaisAPIUserGuide020316R93.pdf).

## Installation

```bash
$ npm install opencalais-tagging
```

## Usage

* Get your free opencalais key from [here](http://www.opencalais.com/opencalais-api/).


>A promise is returned if a callback function is not provided.

```js
const calais  = require('opencalais-tagging'),
      options = {
        content     : 'The content to tag',
        accessToken : 'opencalais-key'
      }
	
const response = await calais.tag(options)

console.log('Response : ', response)

```

>An optional callbck function can also be provided.

```js
const calais  = require('opencalais-tagging'),
      options = {
        content     : 'The content to tag',
        accessToken : 'opencalais-key'
      }
	  
calais.tag(options, (error, data) => {
  console.log('Response : ', data)
})
```

## Options
> ####The following query parameters can be provided.

| Options | Description | Values | Default Value |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|------------------|
| content (MANDATORY) | Content to be tagged. | string | none |
| accessToken (MANDATORY) | Obtained access token | string | none |
| Content-Type | Indicates the input mime type. | text/html, text/xml, text/raw, application/pdf | text/raw |
| omitOutputtingOriginalText | Excludes the original text from the output.  Highly recommended for large input files. | boolean | true |
| outputFormat | Defines the output format. | xml/rdf, application/json, text/n3 | application/json |
| x-calais-contentClass | Specifies the genre of the input document.  Highly recommended for optimal extraction  when input files are news stories or research  reports. | news, research | none |
| x-calais-language | Indicates the language of the input text. | English, French, Spanish | none |
| x-calais-selectiveTags | Lets you specify a custom set of metadata tag  types to be included in the output. | additionalcontactdetails, company, country, deal, company, industry, person, socialtags, topic | none |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
