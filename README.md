#### DEV

[![Build Status Dev](https://travis-ci.com/SadheeraMahanama/Wiley-Test-Frontend.svg?token=hS9VGvZErZvUqky6CU8q&branch=dev)](https://travis-ci.com/SadheeraMahanama/Wiley-Test-Frontend)
[![API Doc Dev](https://img.shields.io/badge/API-Doc-brightgreen)](https://documenter.getpostman.com/view/5662193/TW6tLq58)

#### PROD

[![Build Status Master](https://travis-ci.com/SadheeraMahanama/Wiley-Test-Frontend.svg?token=hS9VGvZErZvUqky6CU8q&branch=master)](https://travis-ci.com/SadheeraMahanama/Wiley-Test-Frontend)
[![API Doc Dev](https://img.shields.io/badge/API-Doc-brightgreen)](https://documenter.getpostman.com/view/5662193/TW6tLq58)
[![Deploy Prod](https://img.shields.io/badge/deploy-success-brightgreen)](https://d2mb2kzywhsi1v.cloudfront.net)


# Wiley Online Library - Coding Test Frontend

Simple Login/Registration page for Wiley Online Library.

## Table of Contents

- [Installation](#installation)
- [Deploy](#deploy)
- [Choose of Technology](#technologies)
 

<a name="installation"></a>

## Installation

### Prerequisites

- Node.js
- npm

### Start App

- Clone this repo: `$ git clone https://github.com/SadheeraMahanama/Wiley-Test-Frontend.git`
- Install dependencies: `$ npm install`
- Start this application: `$ npm start`

<a name="deploy"></a>

## Deploy

#### Setup `aws-cli`

   - Refer: [Install AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)

#### Configure Hosted S3 Bucket Name & CloudFront Distribution ID

   - Configure in `package.json`

   ```
   "scripts": {
    "deploy": "aws s3 sync build s3://<S3_Bucket_Name> && aws cloudfront create-invalidation --distribution-id <CloudFront_Distribution_ID> --paths \"/*\""
  }
   ```
   
#### Deploy
   - Deploy: 
      ```
      $ npm run deploy
      ```
   

<a name="technologies"></a>

## Choose of Technology

- **React** - ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM (JavaScript object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM. We can use ReactJS on the client and server-side as well as with other frameworks. It uses component and data patterns that improve readability and helps to maintain larger apps.
