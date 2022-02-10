var licenseIMGURL = ""
var licenseInfo = ""
var licenseBadge = ""
var licenseURL = ""

function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      licenseIMGURL = "https://img.shields.io/badge/License-MIT-yellow.svg"
        break;
    case "MPL 2.0":
      licenseIMGURL  = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
        break;
    case "WTFPL":
      licenseIMGURL  = "https://img.shields.io/badge/License-WTFPL-brightgreen.svg"
        break;
    case "ODbL":
      licenseIMGURL  = "https://img.shields.io/badge/License-ODbL-brightgreen.svg"
        break;
    case "IPL 1.0":
      licenseIMGURL  = "https://img.shields.io/badge/License-IPL_1.0-blue.svg"
        break;
    case "GPL v3":
      licenseIMGURL  = "https://img.shields.io/badge/License-GPLv3-blue.svg"
        break;
    case "ISC":
      licenseIMGURL  = "https://img.shields.io/badge/License-ISC-blue.svg"
        break;
    case "None":
      licenseIMGURL  = ""
        break;
    }
    return licenseIMGURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license){
      case "MIT":
        licenseURL = "https://opensource.org/licenses/MIT"
          break;
      case "MPL 2.0":
        licenseURL = "https://opensource.org/licenses/MPL-2.0"
          break;
      case "WTFPL":
        licenseURL = "http://www.wtfpl.net/about/"
          break;
      case "ODbL":
        licenseURL = "https://opendatacommons.org/licenses/odbl/"
          break;
      case "IPL 1.0":
        licenseURL = "https://opensource.org/licenses/IPL-1.0"
          break;
      case "GPL v3":
        licenseURL = "https://www.gnu.org/licenses/gpl-3.0"
          break;
      case "ISC":
        licenseURL = "https://opensource.org/licenses/ISC"
          break;
      case "None":
        licenseURL = ""
          break;
      }
      return licenseURL;
}

function renderCompleteLicenseHeader (license, licenseIMGURL, licenseURL) {
  switch(license){
    case "MIT":
      licenseBadge = `[![License: ${license}](${licenseIMGURL})](${licenseURL})`
        break;
    case "MPL 2.0":
      licenseBadge = `[![License: ${license}](${licenseIMGURL})](${licenseURL})`
        break;
    case "WTFPL":
      licenseBadge = `[![License: ${license}](${licenseIMGURL})](${licenseURL})`
        break;
    case "ODbL":
      licenseBadge = `[![License: ${license}](${licenseIMGURL})](${licenseURL})`
        break;
    case "IPL 1.0":
      licenseBadge = `[![License: ${license}](${licenseIMGURL})](${licenseURL})`
        break;
    case "GPL v3":
      licenseBadge = `[![License: ${license}](${licenseIMGURL})](${licenseURL})`
        break;
    case "ISC":
      licenseBadge = `[![License: ${license}](${licenseIMGURL})](${licenseURL})`
        break;
    case "None":
      licenseBadge = ""
        break;
    }
    return licenseBadge;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case "MIT":
      licenseInfo = "This project uses the MIT license."
        break;
    case "MPL 2.0":
      licenseInfo = "This project uses the Mozilla Public license MPL 2.0."
        break;
    case "WTFPL":
      licenseInfo = "This project uses The Do What the Fuck You Want to Public License."
        break;
    case "ODbL":
      licenseInfo = "This project uses the Open Database license."
        break;
    case "IPL 1.0":
      licenseInfo = "This project uses the IBM Public license IPL 1.0"
        break;
    case "GPL v3":
      licenseInfo = "This project uses the GNU GPL v3 license"
        break;
    case "ISC":
      licenseInfo = "This project uses the ISC license"
        break;
    case "None":
      licenseInfo = "There is no license attached to this project"
        break;
    }
    return licenseInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, licenseBadge, description, installation, usage, licenseInfo, contributing, tests, github, email, author) {
  return `# ${title}

  ${licenseBadge}  
  
  |  Table of Contents |
  | ----------- |
  | [1. Description.](#description)|
  | [2. Installation.](#installation) |
  | [3. Usage.](#usage)|
  | [4. License.](#licenses)|
  | [5. Contributing.](#contributing)|
  | [6. Tests.](#tests)|
  | [7. Questions.](#questions)|
    
  ## Description
  
  ${description}
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## License
  
  ${licenseInfo}
  
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${tests}
  
  ## Questions
  
  ### 7.1 Webpage URL
  [Github-URL](https://github.com/${github})
  
  ### 7.2 Email
  ${email}
  
  ### End
  
  ${author} 2022
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseSection,
  renderCompleteLicenseHeader,
  renderLicenseLink,
  renderLicenseBadge,
  licenseIMGURL,
  licenseInfo,
  licenseBadge,
  licenseURL,
};

