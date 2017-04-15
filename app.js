// IIFE to create a module
// Data module
var budgetController = (function () {

    // Some code

})();

// UI module
var UIController = (function () {

    // Some code

})();

// Main controller => connects the two other modules
var controller = (function (budgetCtrl, UICtrl) {

    

})(budgetController, UIController);