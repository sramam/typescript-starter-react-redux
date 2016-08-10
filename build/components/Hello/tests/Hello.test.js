/// <reference path="../../../../node_modules/@types/mocha/index.d.ts"/>
"use strict";
var chai_1 = require('chai');
var enzyme_1 = require('enzyme');
var React = require('react');
var Hello_1 = require('../Hello');
describe('<Hello />', function () {
    describe('temp1', function () {
        it('should render hello world', function () {
            var text = 'Hello World';
            var renderedComponent = enzyme_1.shallow(React.createElement(Hello_1.default, {subject: "World"}));
            chai_1.expect(renderedComponent.text()).to.equal('Hello World');
        });
    });
});
//# sourceMappingURL=Hello.test.js.map