# Semester New Tab Chrome Extension

Customized Chrome 'New Tab' Extension, which can be updated to reflect current links each semester

Extensions are small browser add-ons that add new and useful features to Chrome.

## Links

- [View this extension in the Chrome Web Store](https://chrome.google.com/webstore/detail/custom-web-launcher/bjcnlknhmbnejpgmpblndpddpckjhomm?hl=en)
- [Check out the code](https://github.com/denisecase/chrome_new_tab_ext)
- [Review the lessons on Canvas](https://nwmissouri.instructure.com/courses/16155)

## Prerequisites

- [Set up machine for development (Windows version)](https://github.com/denisecase/windows-dev-list)
- [Install Node.js to run dev tools](https://nodejs.org/en/)
- [Install Cypress globally](https://docs.cypress.io) - must be global to get the Cypress commands to work! Use npm which comes with Node.

## Updates

- ES6 updates
- Cypress testing (built on Mocha test framework and Chai assertions)
- Uses fetch() instead of XMLHttpRequest
- [Pure - Simple Responsive CSS](https://purecss.io/)

## SIGCSE 2018 Workshop

[302: Chrome Home: Six Fun Activities Introducing Basic Web Programming Techniques](https://sigcse2018.sigcse.org/attendees/workshops.html)

- Denise M. Case and Douglas Hawley
- Northwest Missouri State University
- Friday, February 23, 2018 7:00 pm - 10:00 pm, Room: 302

This workshop provided participants with several small, fun classroom activities culminating in a useful web-based application that allows individuals to customize the page resulting from opening a new tab in Google Chrome. Attendees participated in and practiced Canvas lessons introducing popular web-based techniques including HTML, JSON, Cascading Style Sheets, JavaScript and Google Chrome extension creation and distribution.
The workshop included six short lessons in which we:

1. download and install the free software required
2. introduce basic concepts in HTML
3. create and link cascading style sheets (CSS)
4. construct a JavaScript file implementing some basic logic constructs into our web page
5. create a JSON manifest file to enable our app to serve as a Chrome extension
6. make the extension available in the chrome web store (if desired, small cost)

Participants will create a “New Tab” extension for their school that can be customized and shared.

## References & Links

- [Bing Image URL](http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1)
- [Stack Overflow Question](https://stackoverflow.com/questions/10639914/is-there-a-way-to-get-bings-photo-of-the-day/45472526#45472526)
- [Clock](https://www.ricocheting.com/code/javascript/html-generator/date-time-clock)
- [Favicon Generator](https://www.favicon-generator.org/)

## Start Editing

- Go to <https://github.com/denisecase/chrome_new_tab_ext>.
- Fork the repository into your account in the cloud.
- Clone your repo down to your local machine.
- Right-click in your new "chrome_new_tab_ext" folder and select "Open With Code"

## Run Development Tasks

Open PowerShell here as Admin to:

1. Install dependencies
1. Format code files with Prettier (and fix any issues manually)
1. Find (and fix JavaScript) with ESLint (and fix any issues manually)
1. Run Cypress testing (couple ways to run each local test alone)
1. Run all Cypress examples and local tests

```PowerShell
npm install
npm run prettier
npm run eslint
npm run t1
npm run t2
npm run t3
npm run t4
npx cypress run  --spec "cypress/integration/dailyImage.spec.js"
npx cypress run  --spec "cypress/integration/dateTime.spec.js"
npx cypress run  --spec "cypress/integration/jokes.spec.js"
npx cypress run  --spec "cypress/integration/location.spec.js"
npx cypress run
```

The command npx runs binarys in the node_modules folder (easier than a long path or environment variable).

## Concepts

Our code runs in the browser, but we test it by running it in Node. This causes several issues.
Cypress uses Mocha and Chai (popular tools) and provides a nearly complete API to access our app.

See [2019 Testing Guilde](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a)

- Unit Tests. Tests bits like functions or classes by supplying input and verifying output.
- Integration Tests. Tests several bits together.
- Functional (end-to-end/black-box) Tests. Tests scenarios by interacting with the running app.

Recommendation:

- Run unit + integration on every change.
- Run functional tests before commits.
