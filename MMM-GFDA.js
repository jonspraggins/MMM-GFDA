/* global Log, Module, moment */

/* Magic Mirror
 * Module: GoodFuckingDesignAdvice
 *
 * By Jon Spraggins http://jonspraggins.com
 * MIT Licensed.
 */
Module.register("MMM-GFDA", {

	// Module config defaults.
	defaults: {
		advice: {
			anytime: [
					"Add some fucking contrast.",
					"Have a clear fucking hierarchy.",
					"Use fucking Helvetica.",
					"Read a fucking book.",
					"Get over your fucking self.",
					"Make it fucking balanced.",
					"Sketch more fucking ideas.",
					"Sans-fucking-serif.",
					"Use a fucking grid system.",
					"Use more fucking white space.",
					"Make it fucking consistent.",
					"Make it fucking asymmetrical.",
					"Fucking simplify.",
					"Use a fucking color scheme.",
					"Have a fucking focal point.",
					"Fix your fucking letterspacing.",
					"Rag your fucking type.",
					"Do your fucking research.",
					"Fucking communicate something.",
					"Always use a fucking contract.",
					"Get fucking inspired.",
					"Use fucking alignment.",
					"Use fucking spell check.",
					"Try a fucking rule line.",
					"Try removing a fucking rule line.",
					"Make it fucking bigger.",
					"Make it fucking smaller.",
					"Consider your fucking user.",
					"Don't be fucking trendy.",
					"Be fucking decisive.",
					"Have a fucking concept.",
					"Hang your fucking quotation marks.",
					"Watch your fucking intervals.",
					"Make me fucking care.",
					"Make it fucking interesting.",
					"Learn to fucking write.",
					"Fucking empathize.",
					"Do your fucking homework.",
					"Pay attention to fucking detail.",
					"Stop fucking around.",
					"Fucking do it again.",
					"Fucking start over.",
					"Don't fucking use comic sans.",
					"Don't fucking steal sheep.",
					"Take a fucking break.",
					"Fail fucking often.",
					"Document your fucking successes.",
					"Write a fucking design brief.",
					"Don't use fucking Helvetica.",
					"Don't work for a bad fucking design firm.",
					"Fucking ideate.",
					"Have a fucking reason.",
					"Take your fucking time.",
					"Be fucking honest with yourself.",
					"Learn to take some fucking criticism.",
					"Fucking experiment.",
					"Don't fucking quit.",
					"Lose your fucking ego.",
					"Love your fucking job.",
					"Pick fucking better clients.",
					"Ask good fucking questions.",
					"Think about all the fucking possibilities.",
					"Don't fucking procrastinate.",
					"Be a good fucking person.",
					"Trust your fucking gut.",
					"Use one fucking space after a period.",
					"Make it fucking legible.",
					"Don't reinvent the fucking wheel.",
					"Reinvent the fucking wheel.",
					"Question fucking everything.",
					"A computer is a Lite-Brite for bad fucking ideas.",
					"A computer is just a fucking tool.",
					"Don't design in a fucking vacuum.",
					"It's all in how you fucking say it.",
					"Don't let the fucking text push you around.",
					"Fucking collaborate.",
					"Clean up your fucking URLs.",
					"Encode your fucking ampersands.",
					"Make it fucking sustainable.",
					"Break the fucking grid.",
					"Don't succumb to fucking cliches.",
					"Don't fucking bastardize type.",
					"Quit your fucking job.",
					"Concept is fucking king.",
					"Fucking bastardize type.",
					"Remove your fucking widows.",
					"Remove your fucking orphans.",
					"Take a fucking chance.",
					"Make fucking mistakes.",
					"Capitalize on the fucking experience.",
					"Save fucking often.",
					"Break the fucking rules.",
					"Know the fucking rules.",
					"Form follows fucking function.",
					"Keep fucking learning.",
					"Sell your fucking ideas.",
					"Track your fucking hours.",
					"Comment your fucking code.",
					"Drink more fucking coffee.",
					"Drink less fucking coffee.",
					"Ask for fucking help.",
					"Don't fucking work for free.",
					"Get a fucking hobby.",
					"Think fucking laterally.",
					"The logo is not the fucking brand.",
					"Get a fucking mentor.",
					"Learn from your fucking mistakes.",
					"You won't know until you fucking try.",
					"Study your fucking process.",
					"Learn to fucking say no.",
					"Learn from your fucking peers.",
					"Educate your fucking client.",
					"Identify a fucking need.",
					"Be more fucking efficient.",
					"Know when to fucking speak up.",
					"Buy your fucking fonts.",
					"Be your fucking self.",
					"There is no fucking box.",
					"You can't polish a fucking turd.",
					"Fucking network.",
					"It's what you fucking leave out.",
					"Check your fucking separations.",
					"Give the client what they fucking need.",
					"Find fucking inspiration everywhere.",
					"Give a fucking damn.",
					"Believe in your fucking self.",
					"Validate your fucking markup.",
					"Proof your fucking copy.",
					"Stay up all fucking night.",
					"Arrive fucking early.",
					"Go to a fucking conference.",
					"Take a fucking workshop.",
					"Don't fucking work on spec.",
					"Hire a fucking photographer.",
					"Know your fucking typefaces.",
					"Back up your fucking data.",
					"Read the fucking copy.",
					"Hire a fucking illustrator.",
					"The problem contains the fucking solution.",
					"Learn from your fucking peers.",
					"Learn from your fucking teachers.",
					"Learn from your fucking students.",
					"Learn from other fucking disciplines.",
					"Work outside of your fucking habits.",
					"Let limitations drive fucking innovation.",
					"Make it appropriate but fucking unexpected.",
					"Be consistent, not fucking predictable.",
					"Less is fucking more.",
					"Design is a fucking lifestyle.",
					"Never fucking assume anything.",
					"Beautiful things work fucking better.",
					"Never fucking get caught.",
					"Respect your fucking colleagues.",
					"Do it right the first fucking time.",
					"Work with reliable fucking vendors.",
					"Measure twice, cut fucking once.",
					"Constantly fucking challenge yourself.",
					"Always ask for more fucking money.",
					"Promote your fucking self.",
					"Get up fucking early.",
					"Get fucking involved.",
					"Trust your fucking process.",
					"Be your own fucking boss.",
					"Open your fucking eyes.",
					"Always be fucking ready.",
					"Be fucking observant.",
					"Practice makes fucking perfect.",
					"Change your fucking routine.",
					"Work fucking harder.",
					"Black is not a fucking color.",
					"Carve your own fucking path.",
					"Fucking inspire someone.",
					"Start a new fucking project.",
					"Defy fucking convention.",
					"Tell a fucking story.",
					"Manage your fucking clients.",
					"Design is fucking change.",
					"Thrive where others fucking fail.",
					"Delight your fucking audience.",
					"Fall in love with your fucking work.",
					"Kill the fucking drop shadow.",
					"Get fucking started.",
					"You have to fucking want it.",
					"Seek fucking criticism.",
					"Don't play by the fucking rules.",
					"Don't make fucking excuses.",
					"Don't covet your fucking ideas.",
					"Give away everything you fucking know.",
					"First impressions are fucking critical.",
					"Hire a fucking developer.",
					"Learn to adapt or fucking die.",
					"Stay fucking passionate.",
					"Own your fucking failures.",
					"Be fucking authentic.",
					"Get in over your fucking head.",
					"Be fucking confident.",
					"Get fucking focused.",
					"Fail, fail, and fucking fail again.",
					"Work with the fucking best.",
					"It's not what you say... it's how you fucking say it.",
					"Take a fucking risk.",
					"Learn to fucking improvise.",
					"Be fucking bold.",
					"Fire your bad fucking clients.",
					"Always fucking deliver.",
					"Be fucking accountable.",
					"Build fucking credibility.",
					"Be fucking visionary.",
					"Co-fucking-create.",
					"Empathy over fucking ego.",
					"Envision the fucking future.",
					"Set your sights fucking higher.",
					"Make your own fucking rules.",
					"There is no fucking limit to creativity.",
					"Triple-check your fucking work.",
					"Have a fucking purpose.",
					"Change is fucking inevitable.",
					"Own your fucking expertise.",
					"Don't apologize for your fucking creativity.",
					"Fake it until you fucking make it.",
					"Master your fucking craft.",
					"Give better fucking creative direction.",
					"Never fucking settle.",
					"Make yourself fucking useful.",
					"Never fucking compromise.",
					"Keep a fucking sketchbook.",
					"Know your fucking history.",
					"Design is a fucking job.",
					"Forget everything you fucking know.",
					"Do what you fucking love.",
					"Start a fucking side project.",
					"Come, sit, and fucking conquer.",
					"Make work that fucking matters.",
					"Have a fucking plan.",
					"Set some fucking goals.",
					"Do the fucking work.",
					"No risk, no fucking reward.",
					"Never cease to be fucking curious.",
					"Adopt a new fucking perspective.",
					"Mastery requires hard fucking work.",
					"Stop waiting for fucking permission.",
					"Live and work without fucking regrets. ",
					"Cultivate some fucking discipline.",
					"Don't play it so fucking safe.",
					"Unleash your fucking creativity.",
					"Be willing to die for your fucking convictions. ",
					"Don't fucking lie to yourself.",
					"The details make the fucking design.",
					"Finish what you fucking start.",
					"Push your fucking self.",
					"Have some fucking initiative. ",
					"Don't overwork the fucking problem.",
					"Ask for fucking feedback.",
					"Obstacles are fucking opportunities. ",
					"Commit first, fucking figure it out later.",
					"Explore your fucking process.",
					"Being creative is a fucking decision.",
					"Make yourself fucking uncomfortable. ",
					"Every roadblock is a fucking detour.",
					"Give up fucking control.",
					"Just fucking play.",
					"Simple is fucking hard.",
					"Share your fucking ideas.",
					"Design is fucking business. ",
					"Clarity is fucking important. ",
					"There is no right fucking answer.",
					"Hire a fucking accountant.",
					"Learn to manage your fucking time.",
					"Explore all of your fucking options",
					"Stop using Google for fucking inspiration.",
					"Dreaming ain't fucking doing.",
					"Creativity requires fucking tenacity. ",
					"Mistakes make great fucking work.",
					"Be fucking patient.",
					"Fucking create something.",
					"Make the time and fucking energy. ",
					"Quit thinking like a fucking designer.",
					"Learn on the fucking job.",
					"Lead, Don't fucking follow.",
					"Use a tool you can't fucking control.",
					"Create something that makes you fucking laugh.",
					"Hire a fucking bookkeeper.",
					"Design for your fucking self.",
					"Keep a fucking journal.",
					"Challenge your fucking assumptions.",
					"Become a fucking expert.",
					"Think like a fucking beginner.",
					"Stop doing fucking busywork.",
					"Listen to your fucking intuition.",
					"Put it all on the fucking line.",
					"Creativity is built on fucking failure.",
					"Experimentation leads to fucking innovation.",
					"Be fucking persistent.",
					"Be driven, not fucking impatient.",
					"Get fucking paid.",
					"Quality over fucking quantity.",
					"Expertise is fucking expensive.",
					"Earn your fucking experience.",
					"Change the fucking terms of business."
			],
			morning: [
				"Good fucking morning",
				"Enjoy your fucking day!",
				"Rise and fucking shine",
				"Carpe fucking diem"
			],
			afternoon: [
				"Learn to fucking work for yourself.",
				"Learn to fucking take advice.",
				"Be fucking productive.",
				"Never take no for a fucking answer.",
				"Show some fucking passion.",
				"Learn to manage your fucking projects.",
				"Learn to fucking give advice.",
				"Solve problems through fucking action.",
				"Make a fucking difference.",
				"Work together as a fucking team.",
				"Don't wait to be fucking discovered.",
				"Create your own fucking opportunities.",
				"Fall in love with repetition and fucking practice.",
				"Celebrate your fucking failures.",
				"Make the fucking leap."
			],
			evening: [
				"Fucking sleep on it."
			]
		},
		updateInterval: 30000,
		remoteFile: null,
		fadeSpeed: 4000,
		morningStartTime: 3,
		morningEndTime: 12,
		afternoonStartTime: 12,
		afternoonEndTime: 17
	},

	// Set currentweather from module
	currentWeatherType: "",

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		this.lastComplimentIndex = -1;

		var self = this;
		if (this.config.remoteFile != null) {
			this.complimentFile(function(response) {
				self.config.advice = JSON.parse(response);
				self.updateDom();
			});
		}

		// Schedule update timer.
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

	/* randomIndex(advice)
	 * Generate a random index for a list of advice.
	 *
	 * argument advice Array<String> - Array with advice.
	 *
	 * return Number - Random index.
	 */
	randomIndex: function(advice) {
		if (advice.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * advice.length);
		};

		var complimentIndex = generate();

		while (complimentIndex === this.lastComplimentIndex) {
			complimentIndex = generate();
		}

		this.lastComplimentIndex = complimentIndex;

		return complimentIndex;
	},

	/* complimentArray()
	 * Retrieve an array of advice for the time of the day.
	 *
	 * return advice Array<String> - Array with advice for the time of the day.
	 */
	complimentArray: function() {
		var hour = moment().hour();
		var advice;

		if (hour >= this.config.morningStartTime && hour < this.config.morningEndTime && this.config.advice.hasOwnProperty("morning")) {
			advice = this.config.advice.morning.slice(0);
		} else if (hour >= this.config.afternoonStartTime && hour < this.config.afternoonEndTime && this.config.advice.hasOwnProperty("afternoon")) {
			advice = this.config.advice.afternoon.slice(0);
		} else if(this.config.advice.hasOwnProperty("evening")) {
			advice = this.config.advice.evening.slice(0);
		}

		if (typeof advice === "undefined") {
			advice = new Array();
		}

		if (this.currentWeatherType in this.config.advice) {
			advice.push.apply(advice, this.config.advice[this.currentWeatherType]);
		}

		advice.push.apply(advice, this.config.advice.anytime);

		return advice;
	},

	/* complimentFile(callback)
	 * Retrieve a file from the local filesystem
	 */
	complimentFile: function(callback) {
		var xobj = new XMLHttpRequest(),
			isRemote = this.config.remoteFile.indexOf("http://") === 0 || this.config.remoteFile.indexOf("https://") === 0,
			path = isRemote ? this.config.remoteFile : this.file(this.config.remoteFile);
		xobj.overrideMimeType("application/json");
		xobj.open("GET", path, true);
		xobj.onreadystatechange = function() {
			if (xobj.readyState == 4 && xobj.status == "200") {
				callback(xobj.responseText);
			}
		};
		xobj.send(null);
	},

	/* complimentArray()
	 * Retrieve a random compliment.
	 *
	 * return compliment string - A compliment.
	 */
	randomCompliment: function() {
		var advice = this.complimentArray();
		var index = this.randomIndex(advice);

		return advice[index];
	},

	// Override dom generator.
	getDom: function() {
		var complimentText = this.randomCompliment();

		var compliment = document.createTextNode(complimentText);
		var wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright pre-line";
		wrapper.appendChild(compliment);

		return wrapper;
	},


	// From data currentweather set weather type
	setCurrentWeatherType: function(data) {
		var weatherIconTable = {
			"01d": "day_sunny",
			"02d": "day_cloudy",
			"03d": "cloudy",
			"04d": "cloudy_windy",
			"09d": "showers",
			"10d": "rain",
			"11d": "thunderstorm",
			"13d": "snow",
			"50d": "fog",
			"01n": "night_clear",
			"02n": "night_cloudy",
			"03n": "night_cloudy",
			"04n": "night_cloudy",
			"09n": "night_showers",
			"10n": "night_rain",
			"11n": "night_thunderstorm",
			"13n": "night_snow",
			"50n": "night_alt_cloudy_windy"
		};
		this.currentWeatherType = weatherIconTable[data.weather[0].icon];
	},


	// Override notification handler.
	notificationReceived: function(notification, payload, sender) {
		if (notification == "CURRENTWEATHER_DATA") {
			this.setCurrentWeatherType(payload.data);
		}
	},

});
