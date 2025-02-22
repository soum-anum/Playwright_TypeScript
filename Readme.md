### Playwright Typescript Automation Framework

This is a sample automation framework using Playwright and Typescript. The framework is designed to run on multiple environments. 

##### Prerequisites
Node JS
Visual Studio Code

##### Setup and Installation 
```
npm install
```
##### Playwright Installation 
```
npm init playwright@latest
```

##### Dot env Installation 
```
npm install dotenv --save
```

-------------------------

#### Run the tests in Dev env
```
ENV=dev npx playwright test
```

#### Run the tests in Staging env
```
ENV=staging npx playwright test
```