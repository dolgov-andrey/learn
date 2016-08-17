module.exports = {
    extends: 'loris/es5',
    root: true,
    env: {
        browser: true,
        mocha: true
    },
    rules: {
        'no-console': 0
    },
    globals: {
        expect: false
    }
};
