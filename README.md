# GoodFuckingDesignAdvice compliments file
This file displays a random bit of thought-provoking, and possibly not safe for work, advice. This is used by the compliments module for Magic Mirror

## Installation
Two options:  
1. You can clone this file to your compliments module folder and locally reference it:
```javascript
cd ~/MagicMirror/modules/default/compliments/
git clone https://github.com/jonspraggins/MMM-GFDA.git
```
the modify the compliments config in `config/config.js`

````javascript
		config: {
			remoteFile: 'gfda.json'
                        }
````
2. Directly reference this file on github in the compliments section of the `config/config.js` file:
````javascript
		config: {
			remoteFile: 'https://raw.githubusercontent.com/jonspraggins/MMM-GFDA/master/gfda.json'
                        }
````
