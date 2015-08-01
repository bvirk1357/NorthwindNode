'use strict';

// Configuring the Articles module
angular.module('categories').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        console.log('Configuring!!!!');  //DEBUG
        Menus.addMenuItem('topbar', 'Categories', 'categories', 'dropdown', '/categories(/create)?');
        Menus.addSubMenuItem('topbar', 'categories', 'List Categories', 'categories');
        Menus.addSubMenuItem('topbar', 'categories', 'New Category', 'categories/create');
    }
]);