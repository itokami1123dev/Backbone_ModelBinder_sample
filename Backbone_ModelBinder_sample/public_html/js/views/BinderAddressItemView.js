var BinderAddressItemView = Backbone.View.extend({
    tagName: 'li',
    initialize: function(options) {
        this.address = options.address;
        this.addressList = options.addressList;
        this.modelBinder = new Backbone.ModelBinder();
    },
    events: {
       "click": "onClick_item"
    },
    createRender: function(){
        this.$el.append('<div class="js-item-name item-name"></div>');
        this.$el.append('<div class="js-item-kana item-kana"></div>');
        
        var bindings = { 
            name: {selector: '.js-item-name', converter: this.nameConverter},
            kana: {selector: '.js-item-kana' }
        };
        this.modelBinder.bind(
            this.address,
            this.el,
            bindings );

    },
    onClick_item: function( event){
        
        var id = this.address.get("id");
        this.addressList.setSelectedId(id);
        
    },
    nameConverter: function(direction, value){
        if ( direction ){ return (value + '様'); }
        return value;
    }
});


