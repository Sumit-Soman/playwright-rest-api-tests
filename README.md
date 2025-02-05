# Playwright REST API Tests

## Project Description
This project contains automated tests for REST APIs using Playwright. The tests are designed to ensure the reliability and correctness of the API endpoints. We have covered basic tests and assertions, and utilized fixtures to test the APIs. The project structure is designed to be easily extendable, allowing for scalable API testing.

## Prerequisites
- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)
- Playwright (>=1.16)

## How to Run
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/playwright-rest-api-tests.git
    ```
2. Navigate to the project directory:
    ```sh
    cd playwright-rest-api-tests
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Run the tests:
    ```sh
    npx playwright test
    ```
    In UI mode
    ```
    npx playwright test --ui
    ```

## Test Coverage as per Spec File
The test coverage is defined in the spec files located in the `tests` directory. Each spec file contains tests for specific API endpoints and scenarios.

## Usage of Fixtures
Fixtures are used to set up the necessary preconditions and environment for the tests. They are defined in the `fixtures` directory and are automatically loaded by Playwright.

## Deployment with GitHub Actions
The project is configured to run tests automatically using GitHub Actions. The workflow file `.github/workflows/playwright.yml` contains the configuration for the CI pipeline.

## Features
1. REST API Testing using Playwright fixtures feature.

## Summary
This project provides a robust framework for testing REST APIs using Playwright. It includes comprehensive test coverage, easy setup, and automated deployment with GitHub Actions.