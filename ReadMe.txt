
Git setup
---------
git init
git status
git add .
git commit -m "{message}"
git remote add origin {url}
git push -u origin master

NPM setup
---------
npm init
npm install --save-dev lite-server (NodeJS lite-server)
npm install --save bootstrap@4.0.0-alpha.6 (Bootstrap)
npm install --save-dev font-awesome (Font-Awesome)
npm install --save-dev node-sass (Sass compiler)

Deployment
----------
npm install --save-dev onchange parallelshell (detects changes and run parallel NPM scripts)
npm install --save-dev rimraf (can delete/clean dist folder)
npm -g install copyfiles (can copy files)
npm -g install imagemin-cli (can minify website images)
npm install --save-dev usemin-cli cssmin uglify-js htmlmin (minifies CSS, JS, HTML)

NPM Scripts
-----------
"start": "npm run watch:all",
"test": "echo \"Error: no test specified\" && exit 1",
"lite": "lite-server",
"scss": "node-sass -o css/ css/",
"watch:scss": "onchange \"css/*.scss\" -- npm run scss",
"watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\"",
"clean": "rimraf dist",
"copyfonts": "copyfiles -f node_modules/font-awesome/fonts/* dist/fonts",
"imagemin": "imagemin img/* -o dist/img",
"usemin": "usemin {file1} -d dist --htmlmin -o dist/{file1} && usemin {file2} -d dist --htmlmin -o dist/{file2} ...",
"build": "npm run clean && npm run copyfonts && npm run imagemin && npm run usemin"