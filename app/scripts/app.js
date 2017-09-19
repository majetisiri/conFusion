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

            
    }])
  .controller('dishDetailController' , ['$scope',function($scope){
                $scope.dish={
                           author:'Navrattan Biryani',
                           image: 'images/navaratan-biryani.png',
                           category: 'mains',
                           label:'Hot',
                           price:'13',
                           description:'Aged steamed White Basmati rice/ Organic mixed Vegetables/ Saffron/ cashews/ raisins/nuts',
                           comment: ''
                        };
                $scope.comments=[
                          {
                            author:'Srividya Majeti',
                            rating: 5,
                            comment: 'Ultimate, Reaching for the stars.',
                            date:'2017-02-12'
                          },
                               {
                            author:'vamshi kolanu',
                            rating: 4,
                            comment: 'Sends anyone to heaven.',
                            date:'2014-02-12'
                          },
                           {
                            author:'dinesh paladhi',
                            rating: 3,
                            comment: 'Too hot than expected.',
                            date:'2014-01-12'
                          },
                          {
                            author:'dinesh paladhi',
                            rating: 1,
                            comment: 'Too bland',
                            date:'2014-01-12'
                          },
                          {
                            author:'divya majeti',
                            rating: 5,
                            comment: 'Very tasty',
                            date: '2012-03-04'
                          }
                ];
  }])
  .controller('ContactController', ['$scope', function($scope) {

        $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
  }])

  .controller('FeedbackController', ['$scope', function($scope) {
      $scope.sendFeedback=function(){
        console.log($scope.feedback);
                if($scope.feedback.agree && ($scope.feedback.mychannel=="")){
                            $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
  }])


;