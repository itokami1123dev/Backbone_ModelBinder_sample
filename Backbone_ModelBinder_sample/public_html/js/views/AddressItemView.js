var AddressItemView = Backbone.View.extend({
    tagName: 'li',
    initialize: function(options) {
        this.address = options.address;
        this.addressList = options.addressList;
        this.listenTo(this.address, 'change', this.render);
        this.render();
    },
    events: {
       "click": "onClick_item"
    },
    render: function(){
        this.$el.text( this.address.get('name'));
        return this.$el;
    },
    onClick_item: function( event){
        
        var id = this.address.get("id");
        this.addressList.setSelectedId(id);
        
    }
});


