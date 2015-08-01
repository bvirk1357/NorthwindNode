<section data-ng-controller="CategoriesController" data-ng-init="find()">
    <div class="page-header">
        <h1>Categories</h1>
    </div>
    <!-- this is the new search input field -->
    <div class="form-group">
        <input type="text" ng-model="search" typeahead="category as category.name for category in categories | filter:$viewValue | limitTo:8" class="form-control" typeahead-on-select="categorySearch($item)" placeholder="Search Category...">
    </div>
    <!-- end -->
    <div class="list-group">
        <a data-ng-repeat="category in categories | limitTo: offset - categories.length | limitTo: pageSize" data-ng-href="#!/categories/{{category._id}}" class="list-group-item">
            <h4 class="list-group-item-heading" data-ng-bind="category.name"></h4>
            <span data-ng-bind="category.description"></span>
        </a>
    </div>
    <!-- this is the paging control -->
    <pagination total-items="categories.length" ng-model="currentPage" ng-change="pageChanged()" max-size="pageSize" ng-show="categories.length > pageSize"></pagination>
    <!-- end -->
    <div class="alert alert-warning text-center" data-ng-hide="!categories.$resolved || categories.length">
        No categories yet, why don't you <a href="/#!/categories/create">create one</a>?
    </div>
</section>