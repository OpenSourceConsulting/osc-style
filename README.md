# Open Source Consultion Style

OSC-Style is an open source color scheme optimized for the UI, such as fonts, colors, etc., used by the Open Source Consultation R & D team.

## Installation

Using npm:

    $ npm i --save osc-style

## Available Styles

https://tech.osci.kr/osc-style

Please refer to the homepage.

## Currently Supported Formats

SCSS, Sass

## Usage

Import the file to your project and use the variables.

**Example for Sass, SCSS**

    @import 'path/osc-style';

    .body {
        background-color: $primary-600;
        color: $inProgress-500;
    }

    a {
        color: $secondary-800;

        &:hover {
            color: $secondary-50;
        }
    }
