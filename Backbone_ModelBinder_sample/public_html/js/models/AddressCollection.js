var AddressCollection = Backbone.Collection.extend({
    model: AddressModel,
    nowSelectedId:-1,
    setSelectedId: function(id){
        this.nowSelectedId = id;
        this.trigger('selectItem');
    },
    getNowItem: function(){
        return this.where( {id:this.nowSelectedId})[0];
    }
});

