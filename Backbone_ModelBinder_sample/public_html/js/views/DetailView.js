var DetailView = Backbone.View.extend({
    el: '#address-detail-view',
    state: null,
    initialize: function(options) {
        this.state = new Backbone.Model({ "state_is_edit": false});
        this.addressList = options.addressList;
        this.listenTo(this.addressList, 'selectItem', this.selectRender);
        this.listenTo(this.state, "change",this.stateChange);
        this.listenTo(this.addressList, 'change', this.render);
        this.stateChange();
    },
    events:{
        'click .js-edit-btn': 'onClick_editBtn'
    },
    onClick_editBtn:function(event){
        if ( this.state.get("state_is_edit")  ){
            this.updateModel(event);
            
        }else{
            this.editSateOn(event);
        }
        
    },
    updateModel: function(){
        var model = this.addressList.getNowItem();
        var name = this.$('.js-edit-name').val();
        var kana = this.$('.js-edit-kana').val();
        
        model.set({ name:name, kana:kana});
        this.state.set({ "state_is_edit": false});
        
    },
    editSateOn: function(){
        this.state.set({ "state_is_edit": true});
    } ,
    selectRender: function(){
        this.address = this.addressList.getNowItem();
        
        var name = this.address.get('name'),
            kana = this.address.get('kana');
        
        this.$('.js-edit-name').val( name);
        this.$('.js-edit-kana').val( kana);
        this.$('.js-name').text( name);
        this.$('.js-kana').text( kana);
      
        this.stateChange();
      
        this.$('.js-edit-btn').show();
    },
    render: function(){
        var name = this.address.get('name'),
            kana = this.address.get('kana');
        
        this.$('.js-edit-name').val( name);
        this.$('.js-edit-kana').val( kana);
        this.$('.js-name').text( name);
        this.$('.js-kana').text( kana);
        
    },
    
    stateChange: function(){
        if ( this.state.get("state_is_edit") ){
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
        
    }
    
});
