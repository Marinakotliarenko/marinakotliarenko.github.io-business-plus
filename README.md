# Welcome to Business Plus project
This project created for study purposes.

## Getting Started

- Install NPM.
- Install project dependencies with NPM:
```
$ npm intall
```
- Install Bower.
```
$ npm install -g bower
```
- Install project dependencies with Bower.
```
$ bower install
```
- You'll need to compile CSS files from SCSS:
```
$ scss --watch ./app/scss:dist/css --style compressed
```
  in order to have SASS work from console you need to install Ruby and SASS gem.
```
$ gem install sass
```

## Gulp tasks

- You are able to watch & compile SASS with:
```
$ npm run gulp watch-scss
```
- To watch & compile HAML templates:
```
$ npm run gulp watch-haml
```
