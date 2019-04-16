# Module: GoodFuckingDesignAdvice
The 'gfda' module is a module for the MagicMirror and is a derrivative of 'gfdas'
This module displays a random bit of thought-provoking, and possibly not safe for work, design advice.

## Screenshots
- Screenshot
![GFDA Screenshot](gfdascreenshot.png)

## Installation
```javascript
cd ~/MagicMirror/modules
git clone https://github.com/jonspraggins/MMM-GFDA.git

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "gfda",
		position: "lower_third",	// This can be any of the regions.
									// Best results in one of the middle regions like: lower_third
		config: {
			// The config property is optional.
			// If no config is set, the default gfdas are shown.
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:


| Option           | Description
| ---------------- | -----------
| `updateInterval` | How often does the gfda have to change? (Milliseconds) <br><br> **Possible values:** `1000` - `86400000` <br> **Default value:** `30000` (30 seconds)
| `fadeSpeed`      | Speed of the update animation. (Milliseconds) <br><br> **Possible values:**`0` - `5000` <br> **Default value:** `4000` (4 seconds)
| `gfdas`	   | The list of gfdas. <br><br> **Possible values:** An object with four arrays: `morning`, `afternoon`, `evening` and `anytime`. See _gfda configuration_ below. <br> **Default value:** See _gfda configuration_ below.
| `remoteFile`     | External file from which to load the gfdas <br><br> **Possible values:** Path or URL (starting with `http://` or `https://`) to a JSON file containing gfdas, configured as per the value of the _gfdas configuration_ (see below). An object with four arrays: `morning`, `afternoon`, `evening` and `anytime`. - `gfdas.json` <br> **Default value:** `null` (Do not load from file)
| `classes`        | Override the CSS classes of the div showing the gfdas <br><br> **Default value:** `thin xlarge bright`
| `morningStartTime`        |  Time in hours (in 24 format), after which the mode of "morning" will begin <br> **Possible values:** `0` - `24` <br><br> **Default value:** `3`
| `morningEndTime`        |  Time in hours (in 24 format), after which the mode of "morning" will end <br> **Possible values:** `0` - `24` <br><br> **Default value:** `12`
| `afternoonStartTime`        | Time in hours (in 24 format), after which the mode "afternoon" will begin <br> **Possible values:** `0` - `24` <br><br>  **Default value:** `12`
| `afternoonEndTime`        | Time in hours (in 24 format), after which the mode "afternoon" will end <br> **Possible values:** `0` - `24` <br><br> **Default value:** `17`

All the rest of the time that does not fall into the morningStartTime-morningEndTime and afternoonStartTime-afternoonEndTime ranges is considered "evening".

### Compliment configuration

The `gfdas` property contains an object with four arrays: <code>morning</code>, <code>afternoon</code>, <code>evening</code> and <code>anytime</code>. Based on the time of the day, the gfdas will be picked out of one of these arrays. The arrays contain one or multiple gfdas.


If use the currentweather is possible use a actual weather for set gfdas. The availables properties are:
- `day_sunny`
- `day_cloudy`
- `cloudy`
- `cloudy_windy`
- `showers`
- `rain`
- `thunderstorm`
- `snow`
- `fog`
- `night_clear`
- `night_cloudy`
- `night_showers`
- `night_rain`
- `night_thunderstorm`
- `night_snow`
- `night_alt_cloudy_windy`

#### Example use with currentweather module
````javascript
config: {
	gfdas: {
		day_sunny: [
			"It's fucking sunny today"
		],
		snow: [
			"It's fucking snowing!"
		],
		rain: [
			"Don't forget your fucking umbrella"
		]
	}
}
````

#### Multi-line gfdas:
Use `\n` to split gfda text into multiple lines, e.g. `First line.\nSecond line.` will be shown as:
```
First line.
Second line.
```

### External Compliment File
You may specify an external file that contains the three gfda arrays. This is particularly useful if you have a
large number of gfdas and do not wish to crowd your `config.js` file with a large array of gfdas.
Adding the `remoteFile` variable will override an array you specify in the configuration file.

This file must be straight JSON. Note that the array names need quotes
around them ("morning", "afternoon", "evening", "snow", "rain", etc.).
#### Example gfdas.json file:
````json
{
    "anytime" : [
        "Hey there sexy!"
    ],
    "morning" : [
        "Good fucking morning!",
        "Drink some fucking coffee"
    ],
    "evening" : [
        "Fucking sleep on it"
    ]
}
````

