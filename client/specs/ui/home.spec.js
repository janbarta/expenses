describe('home page', function() {
    it('should show home page', function() {
        browser.get('http://localhost:8000/#');

        var h1 = element(by.binding('h.message'));

        expect(h1.getText()).toBe('Welcome to the expense app');
    });
});