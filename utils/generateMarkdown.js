// a function to return the license badge
function renderLicenseBadge(license) {
  switch (license) {
    case "agpl-3.0":
      return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
    case "gpl-3.0":
      return `![License: GPL v3](https://img.shields.io/badge/License-GPL_v3-blue.svg)`;
    case "lgpl-3.0":
      return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
    case "mpl-2.0":
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    case "apache-2.0":
      return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case "mit":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case "bsl-1.0":
      return `![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    case "unlicense":
      return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
    default:
      return '';
  }
}

// a function to return the license link
function renderLicenseLink(license) {
  switch (license) {
    case "agpl-3.0":
      return "https://www.gnu.org/licenses/agpl-3.0";
    case "gpl-3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "lgpl-3.0":
      return "https://www.gnu.org/licenses/lgpl-3.0";
    case "mpl-2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "apache-2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "mit":
      return "https://opensource.org/licenses/MIT";
    case "bsl-1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "unlicense":
      return "http://unlicense.org/";
    default:
      return '';
  }
}

// a function to return the license section
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    const licenseLink = renderLicenseLink(license);
    return `## License\nThis project is licensed under the [${license} license](${licenseLink}).`;
  }
}

// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license) ${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description 

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

 
${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests


${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).



`;
}

module.exports = generateMarkdown;
