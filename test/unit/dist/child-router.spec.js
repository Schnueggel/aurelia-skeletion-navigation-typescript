System.register(['../../../dist/child-router'], function(exports_1) {
    var child_router_1;
    var RouterStub;
    return {
        setters:[
            function (child_router_1_1) {
                child_router_1 = child_router_1_1;
            }],
        execute: function() {
            RouterStub = (function () {
                function RouterStub() {
                }
                RouterStub.prototype.configure = function (handler) {
                    handler(this);
                };
                RouterStub.prototype.map = function (routes) {
                    this.routes = routes;
                };
                return RouterStub;
            })();
            describe('the Child Router module', function () {
                var sut, mockedRouter;
                beforeEach(function () {
                    mockedRouter = new RouterStub();
                    sut = new child_router_1.ChildRouter();
                    sut.configureRouter(mockedRouter, mockedRouter);
                });
                it('contains a router property', function () {
                    expect(sut.router).toBeDefined();
                });
                it('configures the heading', function () {
                    expect(sut.heading).toEqual('Child Router');
                });
                it('should have a welcome route', function () {
                    expect(sut.router.routes).toContain({ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' });
                });
                it('should have a users route', function () {
                    expect(sut.router.routes).toContain({ route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' });
                });
                it('should have a child router route', function () {
                    expect(sut.router.routes).toContain({ route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' });
                });
            });
        }
    }
});
