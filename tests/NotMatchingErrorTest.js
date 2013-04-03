(function (Tinytest, NotMatchingError) {
    "use strict";

    Tinytest.add('NotMatchingError: get route from constructor', function (test) {
        var route = {},
            url = '',
            error = new NotMatchingError(route, url);
        test.equal(error.getRoute(), route);
    });

    Tinytest.add('NotMatchingError: get url from constructor', function (test) {
        var route = {},
            url = '',
            error = new NotMatchingError(route, url);
        test.equal(error.getURL(), url);
    });

    Tinytest.add('NotMatchingError: sets message automatically', function (test) {
        var route = {},
            url = 'notMatchingURL',
            error = new NotMatchingError(route, url);
        test.equal(error.message, 'Route is not matching notMatchingURL');
    });
} (Tinytest, Router.NotMatchingError));