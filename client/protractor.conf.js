exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/ui/*'],
    rootElement: '.expense-client'
};