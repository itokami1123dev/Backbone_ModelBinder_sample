var AddressListView = Backbone.View.extend({
    el: '#address-list-view',
    initialize: function(options) {
        this.addressList = options.addressList;
        this.listenTo(this.addressList, 'reset', this.createRender);
    },
    createRender: function(){
        this.addressList.each( this.createOneRender, this);
    },
    createOneRender: function( address){
        var addressItemView = new AddressItemView({
            address: address,
            addressList: this.addressList
        });
        
        this.$('.js-list').append(addressItemView.$el);
        
    }
});

 
 