// a function to return the license badge
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// a function to return the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (
      `\n* [License](#license)\n`
    );
  }
  return '';
}

// A function to return the license section
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
      `## License\nThis project is licensed under the ${license} license.`
    );
  }
  return '';
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
