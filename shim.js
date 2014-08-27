'use strict';

module.exports = {
  'jquery': {
    exports: 'jQuery'
  },
  'bootstrap': {
    depends: {
      'jquery': 'jQuery'
    }
  },
  'ui-bootstrap': {
    depends: {
      'angular': 'angular'
    }
  },
  md5: {
    exports: 'md5'
  },
  bootbox: {
    exports: 'bootbox'
  },
  codemirror: {
    exports: 'CodeMirror'
  },
  'ui-codemirror': {
    depends: {
      'angular': 'angular',
      'codemirror': 'CodeMirror'
    }
  },
  timeago: {
    depends: {
      jquery: 'jQuery'
    }
  }
};
