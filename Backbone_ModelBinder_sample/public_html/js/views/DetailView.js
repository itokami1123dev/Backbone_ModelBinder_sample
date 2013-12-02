var DetailView = Backbone.View.extend({
    el: '#address-detail-view',
    state_is_edit: false,
    initialize: function(options) {
        this.addressList = options.addressList;
        this.listenTo(this.addressList, 'selectItem', this.render);
        this.listenTo(this.addressList, 'change', this.render);
    },
    events:{
        'click .js-edit-btn': 'onClick_editBtn'
    },
    onClick_editBtn:function(event){
        if ( this.state_is_edit ){
            this.updateModel(event);
            
        }else{
            this.editSateOn(event);
        }
        
    },
    updateModel: function(){
        var model = this.addressList.getNowItem();
        var name = this.$('.js-edit-name').val();
        var kana = this.$('.js-edit-kana').val();
        
        this.state_is_edit = false;
        model.set({ name:name, kana:kana});
        
    },
    editSateOn: function(){
        this.state_is_edit = true;
        this.render();
    } ,
    render: function(){
        var item = this.addressList.getNowItem(),
            name = item.get('name'),
            kana = item.get('kana');
        
        this.$('.js-edit-name').val( name);
        this.$('.js-edit-kana').val( kana);
        this.$('.js-name').text( name);
        this.$('.js-kana').text( kana);
        
        if ( this.state_is_edit ){
            this.$('.js-name').hide();
            this.$('.js-kana').hide();
            this.$('.js-edit-name').show();
            this.$('.js-edit-kana').show();
            this.$('.js-edit-btn').text("更新");
            
        }else{
            this.$('.js-edit-name').hide();
            this.$('.js-edit-kana').hide();
            this.$('.js-name').show();
            this.$('.js-kana').show();
            this.$('.js-edit-btn').text("編集");
            
        }
        
        this.$('.js-edit-btn').show();
    }
});
