System.register(['../../../dist/users'], function(exports_1) {
    var users_1;
    var HttpStub;
    return {
        setters:[
            function (users_1_1) {
                users_1 = users_1_1;
            }],
        execute: function() {
            HttpStub = (function () {
                function HttpStub() {
                }
                HttpStub.prototype.fetch = function (url) {
                    var response = this.itemStub;
                    this.url = url;
                    return new Promise(function (resolve) {
                        resolve({ json: function () { return response; } });
                    });
                };
                HttpStub.prototype.configure = function (func) {
                };
                return HttpStub;
            })();
            describe('the Users module', function () {
                it('sets fetch response to users', function (done) {
                    var http = new HttpStub(), sut = new users_1.Users(http), itemStubs = [1], itemFake = [2];
                    http.itemStub = itemStubs;
                    sut.activate().then(function () {
                        expect(sut.users).toBe(itemStubs);
                        expect(sut.users).not.toBe(itemFake);
                        done();
                    });
                });
            });
        }
    }
});
