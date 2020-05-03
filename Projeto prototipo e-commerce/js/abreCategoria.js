var seletor = document.getElementById('seletor-cat');
var categoria = document.querySelector('.desaparece');	
var mediaQuery =window.matchMedia("(max-width:800px)");
var menuActive =document.querySelector('#menu-icon');
var menu =document.querySelector('.menu');
	
	var menuCategorias = {
			mostraCategoria:function(){				
			seletor.addEventListener('mouseover',function(){
			categoria.classList.add('mostraCategoria');
			seletor.style.color="lightblue";
		});

			},
			recolheMenu:function(){
			categoria.addEventListener('mouseleave',function(){
			categoria.classList.remove('mostraCategoria');
			seletor.style.color="royalblue";
		});
					},
		ativaMenuClick:function(){
			seletor.addEventListener('click',function(){
				categoria.classList.toggle('mostraCategoria');
			});
		},
		ativaMenu:function(){
			if(mediaQuery){
				menuActive.addEventListener('click',function(){
					menu.classList.toggle('menuAtive');
				});
			}

		}
	}	
	menuCategorias.ativaMenu();
	menuCategorias.ativaMenuClick();
	menuCategorias.mostraCategoria();
	menuCategorias.recolheMenu();