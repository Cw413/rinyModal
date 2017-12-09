var rinyModal=function(wrap,callback){

	this.wrap=$(wrap);
	this.callback=callback;

	this.position='fixed';
	this.ver=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
	if(this.ver && parseInt(this.ver[1])<5){
		this.position='absolute';
	};

	this.html=$('<div class="riny_modal" style="position:'+this.position+';display:none;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:999;"></div>');

	this.wrap.append(this.html);
};
rinyModal.prototype.showModal=function(){

	this.html.show();
	
	this.callback && this.callback.show && this.callback.show();

};
rinyModal.prototype.hideModal=function(){

	this.html.hide();

	this.callback && this.callback.hide && this.callback.hide();

};