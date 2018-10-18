var shop_car= (function(){
    var $add_shop = $('.add_shop');
    var shopList = localStorage.shopList || '[]';
    shopList = JSON.parse(shopList);
    return {
        init() {
            this.events();
            this.insertData(shopList);
        },
        insertData(data) {
            var str = ''
            for(var i = 0; i < data.length; i++) {
                var li = `<tr id="${data[i].id}">
                			<td>${data[i].img}</td>
                            <td>${data[i].name}</td>
                            <td>${data[i].price}</td>
                            <td><input type='number' value='${data[i].count}' /></td>
                            <td><button class='btn btn-danger del-btn'>删除</button></td>
                            </tr>`
                str += li;
            }
            $add_shop.html(str);
        },
        addShop(obj) {
            var add = true;
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            for(var i= 0; i<shopList.length; i++) {
                if(obj.id == shopList[i].id) {
                    add = false
                    shopList[i].count += obj.count;
                    break;
                }
            }
            if(add) {
                shopList.push(obj);
            }
            localStorage.shopList= JSON.stringify(shopList);
            console.log(localStorage.shopList)
        },
        events() {
            var _this = this;
            $add_shop.on('change', 'input', function() {
                var tr = $(this).closest('tr');
                var val = $(this).val();
                shopList[tr.index()].count = val;
                localStorage.shopList = JSON.stringify(shopList);     
            })
            $add_shop.on('click', '.del-btn', function() {
               var tr = $(this).closest('tr');
               shopList.splice(tr.index(), 1);
               localStorage.shopList = JSON.stringify(shopList);
               tr.remove()
            })
        }
    }
}())
shop_car.init();