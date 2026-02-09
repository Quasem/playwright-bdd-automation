 
🚀 Playwright BDD Automation Task

Yo! Welcome to my automation fundamentals project. I built this to show off some basic web automation skills using Playwright and Playwright-BDD.

🎯 Purpose

This project is part of my Automation Fundamentals task. The goal was to set up a working test suite from scratch, handle some Gherkin (BDD) scenarios, and keep the Git history lookin' clean with incremental updates.

🛠️ Installation

First things first, you gotta have Node.js (v18.19 or higher) installed on your machine. Once you're set there, just follow these steps:

Clone the repo:

git clone <your-repo-url>
cd playwright-bdd-automation


Install the goodies:

npm install


Get the browsers ready:

npx playwright install


🏃 How to Run Tests

Since we're using BDD, we gotta generate the test files first before we run 'em.

Generate the tests:

npx bddgen


Run 'em:

npx playwright test


Check the report (if you wanna see the deets):

npx playwright show-report


🧪 Test Details

The main test case lives in sample.feature. It basically:

Hits the Playwright home page.

Clicks that "Get started" link.

Makes sure the page title actually says "Installation" like it's supposed to.

Keeping it simple but effective! LFG! 🚀
