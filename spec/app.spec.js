let Application = require('spectron').Application,
    assert = require('assert');

describe('App', () => {
    beforeEach(() => {
        this.app = new Application({
            path: `${__dirname}/../node_modules/.bin/electron`,
            args: ['main.js'],
        });

        return this.app.start();
    });

    afterEach(() => {
        if (this.app.isRunning()) {
            return this.app.stop();
        }
    });

    it('loads a single window', () => {
        return this.app.client
            .waitUntilWindowLoaded()
            .getWindowCount(count => assert.equal(count, 1));
    });
});
