const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 10000,
  env:
  {
    baseUrl: "https://crowdbotics-slack-dev.herokuapp.com",
    username: "sneh@crowdbotics.com",
    password: "devstringx@123",
    authenticationToken: "UGNYCSUVC4BCH7NL7G54KGBNN7GOLGJK",
    token_key: "",
    loginEndPoint: "/api/v2/totp-login/",
    createApp: "/api/v1/github-repos/",
    searchApp1: "/api/v2/apps/?custom_name=",
    searchApp2: "&page=1&limit=8",
    createTags: "/api/v1/prd_tags/?app=",
    createUserRoles: "/api/v1/prd_roles/?app=",
    createprdGroup: "/api/v1/prd_groups/?app=",
    createprdItem: "/api/v1/prd_items/?app=",
    getprdGroup: "/api/v1/prd_groups/?app=",
    getprdItem: "/api/v1/prd_items/?group=",
    deleteprdItem: "/api/v1/prd_groups/bulk-delete/?app=",
    deleteprdGroup: "/api/v1/prd_groups/?app=",
    createprdai1: "/api/v1/apps/",
    createprdai2: "/prd-ai-generator/generate_features/",
    createcatalogtemplates: "/api/v1/prd_groups/import-archetype/?app=",
    createprdfeature: "/api/v1/prd_groups/import-features/?app=",
    createMilestone: "",
    createTasks: "",
    updateAppName: "/api/v2/apps/",
    codePrivacyPrivateToPublic1: "/api/v1/github-repos/",
    codePrivacyPrivateToPublic2: "/private/",
    codePrivacyPublicToPrivate1: "/api/v1/github-repos/",
    codePrivacyPublicToPrivate2: "/private/",
    deleteApp:"/api/v2/apps/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/api/tests/*.js'
   //specPattern: 'cypress/integration/pagetest/add_test_case.js'
  }
});
