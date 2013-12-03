var AddressItemView = Backbone.View.extend({
    tagName: 'li',
    initialize: function(options) {
        this.address = options.address;
        this.addressList = options.addressList;
        this.listenTo(this.address, 'change', this.updateRender);
    },
    events: {
       "click": "onClick_item"
    },
    createRender: function(){
        this.$el.append('<div class="js-item-name item-name"></div>');
        this.$el.append('<div class="js-item-kana item-kana"></div>');
        this.updateRender();
    },
    updateRender: function(){
        this.$('.js-item-name').text( this.address.get('name') + '様');
        this.$('.js-item-kana').text( this.address.get('kana'));
    },
    onClick_item: function( event){
        
        var id = this.address.get("id");
        this.addressList.setSelectedId(id);
        
    }
});


