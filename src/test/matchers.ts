beforeEach(() => {
  jasmine.addMatchers({

    toHaveText: function() {
      return {
        compare: function(actual, expectedText) {
          var actualText = actual.textContent;
          return {
            pass: actualText == expectedText,
            get message() { return 'Expected ' + actualText + ' to equal ' + expectedText; }
          };
        }
      };
    },

    toContainText: function() {
      return {
        compare: function(actual, expectedText) {
          var actualText = actual.textContent;
          return {
            pass: /* Implement me */ 0,
            get message() { return 'Expected ' + actualText + ' to contain ' + expectedText; }
          };
        }
      };
    }
  });
});
