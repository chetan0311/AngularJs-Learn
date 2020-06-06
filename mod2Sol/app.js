(
  function(){
    "user strict";
    angular.module('ShoppingListCheckoff',[])
    .controller('BuyingList',BuyingList)
    .controller('AlreadybougthList',AlreadybougthList)
    .service('ShoopingListCheckoffService',ShoopingListCheckoffService)

    BuyingList.$inject=['ShoopingListCheckoffService']
    function BuyingList(ShoopingListCheckoffService){
      var list=this;

      list.items=ShoopingListCheckoffService.getToBuyItems();
      list.buy=function(index){
        ShoopingListCheckoffService.buyItem(index);
      };

    }


AlreadybougthList.$inject=['ShoopingListCheckoffService'];
function AlreadybougthList(ShoopingListCheckoffService){
  var list = this;
  list.items=ShoopingListCheckoffService.getBoughtItems();
}

function ShoopingListCheckoffService(){
  var service=this;
  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "milk", quantity: 7 },
    { name: "chips", quantity: 5 },
    { name: "soda", quantity: 6 },
    { name: "Final Fantasy XV", quantity: 1 }];

  var toBougthItem=[]

  service.buyItem=function(index){
    toBougthItem.push(toBuyItems[index]);
    toBuyItems.splice(index,1);
  };


  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return toBougthItem;
  };

}

  }
)();
