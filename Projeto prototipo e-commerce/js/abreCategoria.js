var seletor = document.getElementById('seletor-cat');
var categoria = document.querySelector('.categoria-topo');	
	
	
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
			seletor.style.color="#120A8f";
		});
					},
		ativaMenuClick:function(){
			seletor.addEventListener('click',function(){
				categoria.classList.toggle('mostraCategoria');
			});
		}
	}	
	menuCategorias.ativaMenuClick();
	menuCategorias.mostraCategoria();
	menuCategorias.recolheMenu();