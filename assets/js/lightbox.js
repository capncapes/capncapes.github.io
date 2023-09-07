function openModal() { document.getElementById('lightbox').style.display = 'block' };
function closeModal() { document.getElementById('lightbox').style.display = 'none' };

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
	console.log('newImg', newImg);
    const exifData = await getExif(newImg, n);
	console.log('showImg exifData', exifData);
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

		console.log('getExif', photoSlides[n].exif);
		return photoSlides[n].exif;
	});
}

async function showExif(exifData, n) {
    console.log('showExif BEGIN', exifData);
    const exif = exifData;
    const exifDataFormatted = [
        exif.camera,
        `ƒ/${exif.fnumber}`,
        `${exif.exposure.numerator}/${exif.exposure.denominator}`,
        `${exif.focalLength}mm`,
        `ISO ${exif.iso}`
    ].join(' • ');
	console.log(exifDataFormatted);
    
    document.getElementById('exif-data').innerText = exifDataFormatted;
    console.log('showExif END', photoSlides[n]);
}