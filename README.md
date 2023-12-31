# Basic-Scripts-Automation-Building-Blocks-With-Bun-and-Typescript

This project aims to show how to do basic operations that may be useful for fully-fledged automation scripts in BunJs.

## Features

### Current Features (Automating with Node.js by Shaun M. Stone 2018, updated with Bun and newer methods)

- Methods on process
- Extracting information from URL
- Adding parameters to the URL
- Reading files
- Writing files
- Spawning a child process on different operating systems
- Coloring the command line logs
- Sending emails (needs to configure your email service, here it is done with Gmail)
- Copying whole folders
- Processing arguments from the CLI

### Current Features (my own additions to the repository)

- Scraping the web with just URL
- Scraping the web with Puppeteer Example

### Planned Features

## Installation

### Prerequisities

- Bun.js && Node.js
- readLineSync is not working correctly on Bun, so will use Node for the particular scripts
- Thumbs up the issue, so it gets fixed at some point: https://github.com/oven-sh/bun/issues/4694

### Setup

1. Download or Clone the repository
2. Extract the zip
3. Open the folder in command line (one with package.json)
4. Run `bun install`
5. Wait 20-60 seconds
6. Run `bun ${scriptYouWantToRun}.ts`

## License & Contributing

This project is open source with no attribution required. Feel free to fork the repository, make improvements, and submit pull requests.

## Inspiration & Credits

Project was inspired by a book titled "Automating with Node.js" by Shaun M. Stone. In its initial phase, this repository will trail the chapters inside a book (001-020). Deprecated syntax and packages were updated and Node got replaced with Bun.
