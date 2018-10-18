var  shopList = (function(){
    return {
        init: function(ele) {
            this.$ele = document.querySelector(ele);
            this.event();
        },
        event: function() {
            var _this = this;
            this.$ele.addEventListener('click', function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == 'BUTTON' && target.className == 'car') {
                    var id = target.getAttribute('attr-id');
                    var count=$count[0].value;
                    _this.addCar(id, count);
                }
            }, false);
        },
        getShopListData: function(){
            var _this = this;
            var params = {
                success: function(data) {
                    data = JSON.parse(data);
                    _this.insertShopList(data.data);
                }
            }
            sendAjax('json/shop.json', params);
        },
        addCar(id, count) {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            for(var i = 0; i < shopList.length; i++) {
                if(shopList[i].id === id) {
                    shopList[i].count = Number(shopList[i].count) + Number(count);
                    break;
                }
            }
            if(i === shopList.length) {
                shopList.push({id: id, count: count});
            }
            localStorage.shopList = JSON.stringify(shopList);

        }
    }
}())