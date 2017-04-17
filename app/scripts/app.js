'use strict';

angular.module('conFusionApp',[])

    .controller('MenuController' , ['$scope', function($scope){

            $scope.tab=1;
            $scope.filtText = '';
            $scope.showDetails = false;

               $scope.dishes=[
                         {
                           name:'Navrattan Biryani',
                           image: 'images/navaratan-biryani.png',
                           category: 'mains',
                           label:'Hot',
                           price:'13',
                           description:'Aged steamed White Basmati rice/ Organic mixed Vegetables/ Saffron/ cashews/ raisins/nuts',
                           comment: ''
                        },
                        {
                           name:'Veg Samosa-Vegan',
                           image: 'images/samosa.png',
                           category: 'appetizer',
                           label:'',
                           price:'5.99',
                           description:'Triangular pies/ stuffed potatoes/ green peas/ spices',
                           comment: ''
                        },
                        {
                           name:'Gobi Manchurians-Vegan',
                           image: 'images/gobi.png',
                           category: 'appetizer',
                           label:'New',
                           price:'10',
                           description:'Cauliflower/ onions/ tomatoes/ spices',
                           comment: ''
                        },
                        {
                           name:'Kheer',
                           image: 'images/kheer.png',
                           category: 'dessert',
                           label:'',
                           price:'4',
                           description:'Traditional Indian rice pudding/ cardamom/ rose syrup/ nuts & raisins',
                           comment: ''
                        },
                        {
                           name:'Chicken Biryani',
                           image: 'images/chicken-biryani.png',
                           category: 'mains',
                           label:'Hot',
                           price:'16',
                           description:'Aged steamed White Basmati rice/ Boneless Chicken/ freshly ground spices/ Saffron/Nuts',
                           comment: ''
                        },
                        {
                           name:'Paneer 65',
                           image: 'images/panner.png',
                           category: 'appetizer',
                           label:'',
                           price:'12',
                           description:'Paneer/ onions/ ginger/ garlic/ spices',
                           comment: ''
                        },
                        {
                           name:'Chili Chicken',
                           image: 'images/chili.png',
                           category: 'appetizer',
                           label:'New',
                           price:'12.5',
                           description:'Boneless Chicken/ bell peppers/ onions/ tomatoes/ spices',
                           comment: ''
                        },
                        {
                           name:'Gulab Jamun',
                           image: 'images/gulabjamun.png',
                           category: 'dessert',
                           label:'',
                           price:'4',
                           description:'Fried milk pastry balls/honey/saffron/served hot',
                           comment: ''
                        }
                        ];

            $scope.select = function(setTab) {
                $scope.tab = setTab;
                if (setTab === 2){
                   $scope.filtText = "appetizer";
                 }
                else if (setTab === 3){
                  $scope.filtText = "mains";
                } 
                else if (setTab === 4){
                  $scope.filtText = "dessert";
                }
                else{
                  $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };

            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };

            
    }]);