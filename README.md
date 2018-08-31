# Open Source Consultion Style

OSC-Style is an open source color scheme optimized for the UI, such as fonts, colors, etc., used by the Open Source Consultation R & D team.

## Installation

Using npm:

    $ npm i --save osc-style

## Available Styles and Detailed usage

https://tech.osci.kr/osc-style

Please refer to the homepage.

## Currently Supported Formats

SCSS, Sass

## Usage

Import the file to your project and use the variables.

**Example for Sass, SCSS**

````css
    /* color import */
    @import 'path/osc-style/style_variables/osc-color';
    /* font import*/
    @import 'path/osc-style/style_variables/osc-font';

    /* color */
    .body {
        background-color: $primary-600;
        color: $inProgress-500;
    }

    /* font */
    * {
        @extend .osc-font;
    }
````