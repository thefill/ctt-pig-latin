# CttPigLatin

## Specification

### Core requirements

#### Overview
For this exercise you are required to create a Pig Latin Converter app, 
ideally with Angular 2 as this is the framework Cobalt are using.

This converter will be required to:
* Accept English Words (and or sentences)
* Convert the words entered into Pig Latin
* Output the Pig Latin version of the Word

#### Conversion Rules

As per [Wikipedia’s article on Pig Latin](https://en.wikipedia.org/wiki/Pig_Latin)
1. For words that begin with consonants, all letters before the initial 
   vowel are placed at the end of the word sequence. Then, &quot;ay&quot;
   E.g. “Pig” -&gt; “igpay”
2. For words that begin with vowel sounds, one just adds "way" 
   to the end E.g. “eat” -&gt; “eatway”
3. Ignore the other rule. i.e When words begin with consonant clusters 
   (multiple consonants that form one sound), the whole sound is added 
   to the end when speaking or writing

### Optional requirements
You are optionally required to:
* Keep a track of the history of the last 10 words/sentences and also display these

The app can also incorporate any feature of modern frontend development, e.g. 
* Css PreProcessors,
* Build tools such as Grunt/Gulp, ES5+.

### Rules
You should not use any existing library or algorithm which provide functionality for Pig Latin
Conversion.

You can include third party libraries to do things like nicely output alerts, or CSS frameworks like
Bootstrap/Foundation etc. if desired, to make the app feel more feature rich.

## Usage

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. 

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

Use the `-prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help
To get more help on the Angular CLI use `ng help` or go check out 
the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
