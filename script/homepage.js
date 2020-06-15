let app = angular.module("myModule", []);

app.controller("myController", ($scope, $http) => {

//======================= table creation=======================

        var employees=[
            {name:"shivani", lastname:"yadav", gender:0,salary:"15000",dob:new Date("may 16,1900")},
            {name:"ekta", lastname:"gupta", gender:0,salary:"15000",dob:new Date("may 16,1908")},
            {name:"laxmi", lastname:"verma", gender:0,salary:"18000",dob:new Date("may 16,1930")},
            {name:"anand", lastname:"mishra", gender:1,salary:"15000",dob:new Date("may 16,1909")},
            {name:"himanshu", lastname:"nigam", gender:2,salary:"100000",dob:new Date("may 16,1990")},
            {name:"mohammad", lastname:"shrafraj", gender:1,salary:"70000",dob:new Date("may 16,1999")},
            {name:"shivani", lastname:"yadav", gender:1,salary:"1500",dob:new Date("may 16,1903")},

        ];
        $scope.employes=employees;
        $scope.rowlimit=3;
        $scope.sortColumn="name";
        $scope.reversesort=false;
        $scope.searchText;
        $scope.exactMatch;

        $scope.SortData=function(column){
            $scope.reversesort=($scope.sortColumn==column)?!$scope.reversesort:false;
            $scope.sortColumn=column;
        }
        $scope.getSortClass=function(column){
            if($scope.sortColumn==column){
                return $scope.reversesort? 'arrow-down':'arrow-up'
            }
            return 
        }

        $scope.search=function(item){
            if($scope.searchText===undefined)
                return true
            else if(item.name.tolowercase().indexOf($scope.searchText.tolowercase())!=-1||
            item.name.tolowercase().indexOf($scope.searchText.tolowercase())!=-1)
                return true
            return false
        }

    

       
//========================== events in angularjs======================================

    // $scope.technologies=[
    //     {technology:"angular",like:0,dislikes:0},
    //     {technology:"angularJs",like:0,diSalaryslikes:0},
    //     {technology:"mongodb",like:0,dislikes:0},
    //     {technology:"nodejs",like:0,dislikes:0},
    //     {technology:"mean",like:0,dislikes:0}

    // ];

    // $scope.onlike=function(x){
    //     x.like++
    // },
    // $scope.ondislike=function(y){
    //     y.dislikes++
    // }

// ==============================filters in angularjs===========================






       
    });

    



     