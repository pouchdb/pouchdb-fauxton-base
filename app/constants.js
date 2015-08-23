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

define([], function () {

  var constants = {

    MISC: {
      TRAY_TOGGLE_SPEED: 250,
      DEFAULT_PAGE_SIZE: 20,
      MODAL_BACKDROP_Z_INDEX: 1025
    },

    DATABASES: {
      DOCUMENT_LIMIT: 100
    },

    // global events for common used components
    EVENTS: {
      TRAY_CLOSED: 'tray:closed',
      TRAY_OPENED: 'tray:opened',
      TRAY_HIDE: 'tray:hide',
      NAVBAR_SIZE_CHANGED: 'navbar:size_changed'
    },

    // documentation URLs
    DOC_URLS: {
      GENERAL: 'http://docs.couchdb.org/en/latest/intro/api.html#documents',
      ALL_DBS: 'http://docs.couchdb.org/en/latest/api/server/common.html?highlight=all_dbs#get--_all_dbs',
      REPLICATION: 'http://docs.couchdb.org/en/latest/replication/replicator.html#basics',
      DESIGN_DOCS: 'http://docs.couchdb.org/en/latest/couchapp/ddocs.html#design-docs',
      DESIGN_DOC_METADATA: 'http://docs.couchdb.org/en/latest/api/ddoc/common.html#api-ddoc-view-index-info',
      VIEW_FUNCS: 'http://docs.couchdb.org/en/latest/couchapp/ddocs.html#view-functions',
      MAP_FUNCS: 'http://docs.couchdb.org/en/latest/couchapp/ddocs.html#map-functions',
      REDUCE_FUNCS: 'http://docs.couchdb.org/en/latest/couchapp/ddocs.html#reduce-and-rereduce-functions',
      API_REF: 'http://docs.couchdb.org/en/latest/http-api.html',
      DB_PERMISSION: 'http://docs.couchdb.org/en/latest/api/database/security.html#db-security',
      STATS: 'http://docs.couchdb.org/en/latest/api/server/common.html?highlight=stats#get--_stats',
      ACTIVE_TASKS: 'http://docs.couchdb.org/en/latest/api/server/common.html?highlight=stats#active-tasks',
      LOG: 'http://docs.couchdb.org/en/latest/api/server/common.html?highlight=stats#log',
      CONFIG: 'http://docs.couchdb.org/en/latest/config/index.html',
      VIEWS: 'http://docs.couchdb.org/en/latest/intro/overview.html#views',
      MANGO_INDEX: 'http://docs.couchdb.org/en/latest/intro/api.html#documents',
      MANGO_SEARCH: 'http://docs.couchdb.org/en/latest/intro/api.html#documents',
      CHANGES: 'http://docs.couchdb.org/en/latest/api/database/changes.html?highlight=changes#post--db-_changes'
    },

    LOCAL_STORAGE: {
      SIDEBAR_MINIMIZED: 'sidebar-minimized'
    }
  };
  return constants;
});
