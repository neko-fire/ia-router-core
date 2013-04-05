(function (Tinytest, RouteMatch) {
    "use strict";

    Tinytest.add('ia-route-core - RouteMatch - set parameter', function (test) {
        var routeMatch = new RouteMatch({});
        routeMatch.setParam('key', 'value');
        test.equal('value', routeMatch.getParam('key'));
    });

    Tinytest.add('ia-route-core - RouteMatch - set overwrites defined parameter', function (test) {
        var routeMatch = new RouteMatch({key: 'oldValue'});
        routeMatch.setParam('key', 'newValue');
        test.equal('newValue', routeMatch.getParam('key'));
    });

    Tinytest.add('ia-route-core - RouteMatch - get defined parameter', function (test) {
        var routeMatch = new RouteMatch({key: 'value'});
        test.equal('value', routeMatch.getParam('key'));
    });

    Tinytest.add('ia-route-core - RouteMatch - get defined parameter ignores fallback', function (test) {
        var routeMatch = new RouteMatch({key: 'value'});
        test.equal('value', routeMatch.getParam('key', 'fallback'));
    });

    Tinytest.add('ia-route-core - RouteMatch - get parameter with fallback', function (test) {
        var routeMatch = new RouteMatch({});
        test.equal('fallback', routeMatch.getParam('key', 'fallback'));
    });

    Tinytest.add('ia-route-core - RouteMatch - get params returns defined parameters', function (test) {
        var routeMatch = new RouteMatch({key1: 'v1', key2: 'v2'});
        test.equal({key1: 'v1', key2: 'v2'}, routeMatch.getParams());
    });

    Tinytest.add('ia-route-core - RouteMatch - get params applies fallbacks', function (test) {
        var routeMatch = new RouteMatch({key1: 'v1'});
        test.equal({key1: 'v1', key2: 'v2'}, routeMatch.getParams({key2: 'v2'}));
    });
} (Tinytest, Router.RouteMatch));
