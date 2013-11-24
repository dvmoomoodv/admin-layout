var geral = geral || {};

geral = {
	init: function(){
		this.addEvents();
	},
	addEvents: function(){
		this.adicionarToggleAoMenu();
	},
	adicionarToggleAoMenu: function(){
		$("#menu-principal").on("click", "a", function(){
			$(this).siblings("ul").collapse("toggle");
		});
	}
};

$(function(){
	geral.init();
});