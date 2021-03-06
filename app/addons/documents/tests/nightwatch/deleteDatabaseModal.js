// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

var helpers = require('../../../../../test/nightwatch_tests/helpers/helpers.js');
module.exports = {

  before: function (client, done) {
    var nano = helpers.getNanoInstance();
    nano.db.create('_replicator', function (err, body, header) {
      done();
    });
  },

  after: function (client, done) {
    var nano = helpers.getNanoInstance();
    nano.db.destroy('_replicator', function (err, body, header) {
      done();
    });
  },

  'Shows a warning for system databases (prefixed with _)': function (client) {
    var waitTime = client.globals.maxWaitTime,
        baseUrl = client.globals.test_settings.launch_url;

    client
      .loginToGUI()
      .url(baseUrl + '/#/database/_replicator/_all_docs')
      .clickWhenVisible("#header-dropdown-menu a.dropdown-toggle.icon.fonticon-cog", waitTime, false)
      .waitForElementPresent("#header-dropdown-menu .fonticon-trash", waitTime, false)
      .clickWhenVisible('#header-dropdown-menu .fonticon-trash', waitTime, false)
      .waitForElementPresent('#delete-db-modal', waitTime, false)
      .waitForElementVisible('input#db-name', waitTime, false)
      .assert.elementPresent('.warning')
    .end();
  },

  'Shows no warning for non system databases': function (client) {
    var waitTime = client.globals.maxWaitTime,
        newDatabaseName = client.globals.testDatabaseName,
        baseUrl = client.globals.test_settings.launch_url;

    client
      .loginToGUI()
      .url(baseUrl + '/#/database/' + newDatabaseName + '/_all_docs')
      .clickWhenVisible('#header-dropdown-menu a.dropdown-toggle.icon.fonticon-cog', waitTime, false)
      .waitForElementPresent("#header-dropdown-menu .fonticon-trash", waitTime, false)
      .clickWhenVisible('#header-dropdown-menu .fonticon-trash', waitTime, false)
      .waitForElementPresent('#delete-db-modal', waitTime, false)
      .waitForElementVisible('input#db-name', waitTime, false)
      .assert.elementNotPresent('.warning')
    .end();
  }
};
