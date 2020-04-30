var portfolioApp = angular.module('portfolioApp',[]);
portfolioApp.controller('GalleryListCtrl', function($scope) {
$scope.galleries = [
{ 'title':'Ezreal',
 'when':'2010-03-16',
 'thumbnailUrl':'img/galeria/ez.png'
},
{ 'title':'Xayah',
 'when':'2017-04-19',
 'thumbnailUrl':'img/galeria/xay.jpg'
},
{ 'title':'Vayne',
 'when':'2011-05-10',
 'thumbnailUrl':'img/galeria/vay.jpg'
},
{ 'title':'Varus',
 'when':'2012-05-08',
 'thumbnailUrl':'img/galeria/var.jpg'
},
{ 'title':'Tristana',
 'when':'2009-02-21',
 'thumbnailUrl':'img/galeria/trist.jpg'
},
{ 'title':'Kaisa',
 'when':'2018-03-07',
 'thumbnailUrl':'img/galeria/kais.jpg'
}






];



$scope.tytul ="GALERIA";
$scope.date = new Date();
$scope.sortList = [
    {
    'label':'Alfabetycznie',
    'value':'title'
    },
    {
    'label':'Chronologicznie',
    'value':'when'
    },
    {
    'label':'Najnowsze',
    'value':'-when'
        }
    ];
$scope.orderProp = 'when';



});
