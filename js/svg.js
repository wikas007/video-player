/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Project  : Aim Player
 * Developer: Aim Mikel (Michael Aloo)
 * Created  : 10 Feb, 2021
 * Copyright: 2021 Aim Mikel
 * Contacts : { email: 'michaelaloo.sudo@gmail.com', phone: '+254703929108' }
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * This project and all its content was created by Aim Mikel and is therefore
 * a copyright of the owner. All rights are therefore reserved.
 *
 * You can edit or redistribute this file as you want.
 * However, this product should not be used for any commercial purposes without
 * owners awareness.
 *
 * The aim of this project was to teach developers who are begginers in web
 * development some basic Javascript fundamentals.
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

((root, factory) => {
	root.svg = factory();
})(typeof self !== 'undefined' ? self : this, () => ({
	play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zM48 453.5v-395c0-4.6 5.1-7.5 9.1-5.2l334.2 197.5c3.9 2.3 3.9 8 0 10.3L57.1 458.7c-4 2.3-9.1-.6-9.1-5.2z"/></svg>',
	pause: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M192 79v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zm-48 346V85c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h84c3.3 0 6-2.7 6-6zM448 79v352c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48zm-48 346V85c0-3.3-2.7-6-6-6h-84c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h84c3.3 0 6-2.7 6-6z"/></svg>',
	next: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M372 32h-24c-6.6 0-12 5.4-12 12v183L116.5 39.4C95.9 22.3 64 36.6 64 64v384c0 27.4 31.9 41.8 52.5 24.6L336 283.9V468c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V44c0-6.6-5.4-12-12-12zM112 413.5V98.4l186.7 157.1-186.7 158z"/></svg>',
	previous: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M76 480h24c6.6 0 12-5.4 12-12V285l219.5 187.6c20.6 17.2 52.5 2.8 52.5-24.6V64c0-27.4-31.9-41.8-52.5-24.6L112 228.1V44c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v424c0 6.6 5.4 12 12 12zM336 98.5v315.1L149.3 256.5 336 98.5z"/></svg>',
	forward: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500 64h-24c-6.6 0-12 5.4-12 12v158.3c-1.1-1.2-2.2-2.4-3.5-3.4l-184-159.5C255.9 54.3 224 68.6 224 96v124L52.5 71.4C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6L224 291v125c0 27.4 31.9 41.8 52.5 24.6l184-160.5c1.3-1.1 2.4-2.2 3.5-3.4V436c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12zM48 380.8V131.1l143.6 124.4L48 380.8zm224 0V131.1l143.6 124.4L272 380.8z"/></svg>',
	backward: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M12 448h24c6.6 0 12-5.4 12-12V277.7c1.1 1.2 2.2 2.4 3.5 3.4l184 159.5c20.6 17.2 52.5 2.8 52.5-24.6V292l171.5 148.6c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6L288 221.1v-125c0-27.4-31.9-41.8-52.5-24.6L51.5 232c-1.3 1.1-2.4 2.2-3.5 3.4V76c0-6.6-5.4-12-12-12H12C5.4 64 0 69.4 0 76v360c0 6.6 5.4 12 12 12zm452-316.8V381L320.4 256.5 464 131.2zm-224 0V381L96.4 256.5 240 131.2z"/></svg>',
	repeat: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h28.045c6.353 0 11.613-4.952 11.973-11.294C66.161 141.649 151.453 60 256 60c54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486zM491.699 256h-28.045c-6.353 0-11.613 4.952-11.973 11.294C445.839 370.351 360.547 452 256 452c-54.163 0-103.157-21.923-138.614-57.386l54.128-54.129c7.56-7.56 2.206-20.485-8.485-20.485H20c-6.627 0-12 5.373-12 12v143.029c0 10.691 12.926 16.045 20.485 8.485L80.65 431.35C125.525 476.233 187.516 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z"/></svg>',
	maximize: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H48v100c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v24c0 6.6 5.4 12 12 12h100v100c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-24c-6.6 0-12 5.4-12 12v100H300c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-24c0-6.6-5.4-12-12-12H48V332c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"/></svg>',
	playlist: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 368a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 24H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/></svg>',
	volume:
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M342.91 193.57c-7.81-3.8-17.5-.48-21.34 7.5-3.81 7.97-.44 17.53 7.53 21.34C343.22 229.2 352 242.06 352 256s-8.78 26.8-22.9 33.58c-7.97 3.81-11.34 13.38-7.53 21.34 3.86 8.05 13.54 11.29 21.34 7.5C368.25 306.28 384 282.36 384 256s-15.75-50.29-41.09-62.43zM231.81 64c-5.91 0-11.92 2.18-16.78 7.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c4.87 4.87 10.88 7.05 16.78 7.05 12.33 0 24.19-9.52 24.19-24.02V88.02C256 73.51 244.13 64 231.81 64zM224 404.67L139.31 320H32V192h107.31L224 107.33v297.34zM421.51 1.83c-7.89-4.08-17.53-1.12-21.66 6.7-4.13 7.81-1.13 17.5 6.7 21.61 84.76 44.55 137.4 131.1 137.4 225.85s-52.64 181.3-137.4 225.85c-7.82 4.11-10.83 13.8-6.7 21.61 4.1 7.75 13.68 10.84 21.66 6.7C516.78 460.06 576 362.67 576 255.99c0-106.67-59.22-204.06-154.49-254.16zM480 255.99c0-66.12-34.02-126.62-88.81-157.87-7.69-4.38-17.59-1.78-22.04 5.89-4.45 7.66-1.77 17.44 5.96 21.86 44.77 25.55 72.61 75.4 72.61 130.12s-27.84 104.58-72.61 130.12c-7.72 4.42-10.4 14.2-5.96 21.86 4.3 7.38 14.06 10.44 22.04 5.89C445.98 382.62 480 322.12 480 255.99z"/></svg>',
	volume_slash:
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M256 107.3v37.2l32 25.2V88c0-14.5-11.9-24-24.2-24-5.9 0-11.9 2.2-16.8 7l-37.1 37.1 25.3 19.9zm152 18.6c44.4 25.5 72 75.4 72 130.1 0 19.8-3.7 39-10.5 56.6l25.9 20.4c10.6-23.6 16.6-49.8 16.6-77 0-66.1-33.7-126.6-88-157.9-7.6-4.4-17.4-1.8-21.8 5.9-4.5 7.7-1.8 17.5 5.8 21.9zm30.8-95.7C523.4 74.7 576 161.2 576 256c0 41.8-10.7 81.7-29.4 117.3l25.5 20.1C595 352 608 305.1 608 256c0-106.7-59.1-204.1-154.2-254.2-7.9-4.1-17.5-1.1-21.6 6.7-4.2 7.9-1.2 17.5 6.6 21.7zm-77.7 192.2c9.5 4.5 16.3 12 19.9 20.5l33.1 26c.9-4.3 1.9-8.5 1.9-13 0-26.4-15.8-50.3-41.1-62.4-7.8-3.8-17.5-.5-21.3 7.5s-.5 17.6 7.5 21.4zM637 485.2L23 1.8C19.6-1 14.5-.5 11.8 3l-10 12.5C-1 19-.4 24 3 26.7l614 483.5c3.4 2.8 8.5 2.2 11.2-1.2l10-12.5c2.8-3.5 2.3-8.5-1.2-11.3zm-198.2-3.4c-7.8 4.1-10.8 13.8-6.7 21.6 2.8 5.3 8.2 8.6 14.2 8.5 2.5 0 5.1-.6 7.5-1.8 21.7-11.4 41.2-25.5 58.8-41.4l-25.7-20.2c-14.7 12.6-30.5 24.1-48.1 33.3zM256 404.7L171.3 320H64V192h97.1l-40.6-32H56c-13.3 0-24 10.7-24 24v144c0 13.2 10.7 24 24 24h102.1l89 89c4.9 4.9 10.9 7 16.8 7 12.3 0 24.2-9.5 24.2-24V291.9l-32-25.2v138z"/></svg>',
}));

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * End of File. Goodbye and good luck in your programming.
 * Remember, genius is 1% talent and 99% hardwork.
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
