function openModal() { document.getElementById('lightbox').style.display = 'block' };
function closeModal() { document.getElementById('lightbox').style.display = 'none' };

// async function createImg(n) {
// 	const newImg = new Image();
// 	newImg.src = photoSlides[n].fullsize;
// 	const numberText = document.querySelector('.modal-content .photo-slide .numbertext');
// 	document.querySelector('.modal-content .photo-slide img').src = photoSlides[n].large;
// 	numberText.innerText = n + ' / ' + Object.keys(photoSlides).length;
// 	return;
// }

// function createImg(n) {
// 	return new Promise((resolve, reject) => {
// 		newImg = new Image();
// 		newImg.src = photoSlides[n].fullsize;
// 		let numberText = document.querySelector('.modal-content .photo-slide .numbertext');
// 		document.querySelector('.modal-content .photo-slide img').src = photoSlides[n].large;
// 		numberText.innerText = n + ' / ' + Object.keys(photoSlides).length;
// 		resolve();
// 	});
// };

// function showImg(n) {
// 	if (photoSlides[n].exif) {
// 		console.log(photoSlides[n]);
// 		return photoSlides[n];
// 	} else {
// 		createImg(n).then(() => {
// 			getExif(n);
// 			showExif(n);
// 		});
// 	}
// };

// function showImg(n) {
// 	if (!photoSlides[n].exif) {
// 		createImg(n)
// 			.then(() => getExif(n))
// 			.then(() => showExif(n));
// 	} else {
// 		showExif(n);
// 	}
// };

// async function showImg(n) {
// 	if (!photoSlides[n].exif) {
// 		await createImg(n);
// 		await getExif(n);
// 		showExif(n);
// 	} else {
// 		showExif(n);
// 	}
// }

// function getExif(n) {
// 	console.log("getExif", newImg, n);
// 	EXIF.getData(newImg, function() {
// 		photoSlides[n].exif = {};
// 		photoSlides[n].exif.camera = EXIF.getTag(newImg, 'Model');
// 		photoSlides[n].exif.datetime = EXIF.getTag(newImg, 'DateTimeOriginal');
// 		photoSlides[n].exif.exposure = EXIF.getTag(newImg, 'ExposureTime');
// 		photoSlides[n].exif.mode = EXIF.getTag(newImg, 'ExposureProgram');
// 		photoSlides[n].exif.fnumber = EXIF.getTag(newImg, 'FNumber');
// 		photoSlides[n].exif.focalLength = EXIF.getTag(newImg, 'FocalLength');
// 		photoSlides[n].exif.iso = EXIF.getTag(newImg, 'ISOSpeedRatings');
// 		photoSlides[n].exif.maxAperture = EXIF.getTag(newImg, 'MaxApertureValue');
// 		photoSlides[n].exif.meteringMode = EXIF.getTag(newImg, 'MeteringMode');
// 		photoSlides[n].exif.light = EXIF.getTag(newImg, 'LightSource');
// 		console.log("EXIF", photoSlides[n]);
// 		return photoSlides;
// 	});
// };

// function getExif(n) {
// 	console.log("getExif", newImg, n);
// 	return new Promise((resolve, reject) => {
// 		EXIF.getData(newImg, function() {
// 			photoSlides[n].exif = {};
// 			photoSlides[n].exif.camera = EXIF.getTag(newImg, 'Model');
// 			photoSlides[n].exif.datetime = EXIF.getTag(newImg, 'DateTimeOriginal');
// 			photoSlides[n].exif.exposure = EXIF.getTag(newImg, 'ExposureTime');
// 			photoSlides[n].exif.mode = EXIF.getTag(newImg, 'ExposureProgram');
// 			photoSlides[n].exif.fnumber = EXIF.getTag(newImg, 'FNumber');
// 			photoSlides[n].exif.focalLength = EXIF.getTag(newImg, 'FocalLength');
// 			photoSlides[n].exif.iso = EXIF.getTag(newImg, 'ISOSpeedRatings');
// 			photoSlides[n].exif.maxAperture = EXIF.getTag(newImg, 'MaxApertureValue');
// 			photoSlides[n].exif.meteringMode = EXIF.getTag(newImg, 'MeteringMode');
// 			photoSlides[n].exif.light = EXIF.getTag(newImg, 'LightSource');
// 			console.log("EXIF", photoSlides[n]);
// 			resolve(photoSlides);
// 		});
// 	});
// };

// async function getExif(n) {
// 	const caplesExifData = await new Promise((resolve, reject) => {
// 		EXIF.getData(newImg, function() {
// 			photoSlides[n].exif = {};
// 			photoSlides[n].exif.camera = EXIF.getTag(newImg, 'Model');
// 			photoSlides[n].exif.datetime = EXIF.getTag(newImg, 'DateTimeOriginal');
// 			photoSlides[n].exif.exposure = EXIF.getTag(newImg, 'ExposureTime');
// 			photoSlides[n].exif.mode = EXIF.getTag(newImg, 'ExposureProgram');
// 			photoSlides[n].exif.fnumber = EXIF.getTag(newImg, 'FNumber');
// 			photoSlides[n].exif.focalLength = EXIF.getTag(newImg, 'FocalLength');
// 			photoSlides[n].exif.iso = EXIF.getTag(newImg, 'ISOSpeedRatings');
// 			photoSlides[n].exif.maxAperture = EXIF.getTag(newImg, 'MaxApertureValue');
// 			photoSlides[n].exif.meteringMode = EXIF.getTag(newImg, 'MeteringMode');
// 			photoSlides[n].exif.light = EXIF.getTag(newImg, 'LightSource');
// 			console.log("EXIF", photoSlides[n]);
// 			resolve(photoSlides[n].exif);
// 		});
// 	});

// 	photoSlides[n].exif = caplesExifData;
// }

// async function getExif(n) {
// 	const exifTags = [
// 		'Model', 'DateTimeOriginal', 'ExposureTime', 'ExposureProgram', 
// 		'FNumber', 'FocalLength', 'ISOSpeedRatings', 'MaxApertureValue', 
// 		'MeteringMode', 'LightSource'
// 	];

// 	try {
// 		const caplesExifData = await new Promise((resolve, reject) => {
// 			EXIF.getData(newImg, function() {
// 				if (!photoSlides[n].exif) {
// 					photoSlides[n].exif = {};
// 				}
				
// 				exifTags.forEach(tag => {
// 					photoSlides[n].exif[tag.toLowerCase()] = EXIF.getTag(newImg, tag);
// 				});
				
// 				console.log('EXIF', photoSlides[n].exif);
// 				resolve(photoSlides[n].exif);
// 			});
// 		});

// 		photoSlides[n].exif = caplesExifData;
// 	} catch (error) {
// 		console.error('Error retrieving EXIF data: ', error);
// 	}
// }

// function showExif(n) {
// 	console.log('showExif', photoSlides[n]);
// 	document.getElementById('exif-data').innerText =
// 		photoSlides[n].exif.camera + ' • ' +
// 		'ƒ/' + photoSlides[n].exif.fnumber + ' • ' +
// 		photoSlides[n].exif.exposure.numerator + '/' +
// 		photoSlides[n].exif.exposure.denominator + ' • ' +
// 		photoSlides[n].exif.focalLength + 'mm • ' +
// 		'ISO' + photoSlides[n].exif.iso;
// }

async function createImg(n) {
    console.log('createImg BEGIN');
    const newImg = new Image();
    newImg.src = photoSlides[n].fullsize;
    const numberText = document.querySelector('.modal-content .photo-slide .numbertext');
    document.querySelector('.modal-content .photo-slide img').src = photoSlides[n].large;
    numberText.innerText = n + ' / ' + Object.keys(photoSlides).length;
    console.log('createImg END');
    return newImg;
}

async function showImg(n) {
    console.log('showImg BEGIN');
    const newImg = await createImg(n);
    const exifData = await getExif(newImg, n);
    showExif(exifData, n);
    console.log('showImg END');
}

async function getExif(newImg, n) {
    const exifTags = [
        'Model', 'DateTimeOriginal', 'ExposureTime', 'ExposureProgram',
        'FNumber', 'FocalLength', 'ISOSpeedRatings', 'MaxApertureValue',
        'MeteringMode', 'LightSource'
    ];
    console.log('getExif BEGIN');

	EXIF.getData(this, function () {
		if (!photoSlides[n].exif) {
			photoSlides[n].exif = {};
			console.log('photoSlides[' + n + '].exif created.');
		}

		EXIF.getData(newImg, async function() {
			photoSlides[n].exif = {};
			photoSlides[n].exif.camera = await EXIF.getTag(newImg, 'Model');
			photoSlides[n].exif.datetime = await EXIF.getTag(newImg, 'DateTimeOriginal');
			photoSlides[n].exif.exposure = await EXIF.getTag(newImg, 'ExposureTime');
			photoSlides[n].exif.mode = await EXIF.getTag(newImg, 'ExposureProgram');
			photoSlides[n].exif.fnumber = await EXIF.getTag(newImg, 'FNumber');
			photoSlides[n].exif.focalLength = await EXIF.getTag(newImg, 'FocalLength');
			photoSlides[n].exif.iso = await EXIF.getTag(newImg, 'ISOSpeedRatings');
			photoSlides[n].exif.maxAperture = await EXIF.getTag(newImg, 'MaxApertureValue');
			photoSlides[n].exif.meteringMode = await EXIF.getTag(newImg, 'MeteringMode');
			photoSlides[n].exif.light = await EXIF.getTag(newImg, 'LightSource');
			console.log('EXIF', photoSlides[n]);
		});

		resolve(photoSlides[n].exif);
		console.log('getExif', photoSlides[n].exif);
	});
}

async function showExif(exifData, n) {
    console.log('showExif BEGIN', photoSlides[n]);
    const exif = exifData;
    const exifDataFormatted = [
        exif.camera,
        `ƒ/${exif.fnumber}`,
        `${exif.exposure.numerator}/${exif.exposure.denominator}`,
        `${exif.focalLength}mm`,
        `ISO ${exif.iso}`
    ].join(' • ');
    
    document.getElementById('exif-data').innerText = exifDataFormatted;
    console.log('showExif END', photoSlides[n]);
}