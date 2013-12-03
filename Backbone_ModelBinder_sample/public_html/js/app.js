$(function(){
    
    // データは共通
    var addressList = new AddressCollection();
    
    // binder無版
    new AddressListView({addressList:addressList});
    new DetailView({addressList:addressList});
    
    // binder有版
    new BinderAddressListView({addressList:addressList});
    new BinderDetailView({addressList:addressList});
   
   addressList.reset([
       { id: 1, name:"愛飢尾",   kana: "アイウエオ"},
       { id: 2, name:"柿苦毛個", kana: "カキクケコ"},
       { id: 3, name:"差師周世祖", kana: "サシスセソ"}
    ]);

});



