describe('categories page', function() {
    it('should show categories list', function() {
        browser.get('http://localhost:8000/#/categories/list');

        var todoList = element.all(by.repeater('category in c.categories'));
        expect(todoList.count()).toEqual(2);
    });
});