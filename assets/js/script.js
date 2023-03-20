$(document).ready(() => {
	$("#btn-mobile").click((e) =>  {
		if(e.type === 'touchstart') {
			e.preventDefault();
		}

		$("#nav").toggleClass('active');

		const active = nav.classList.contains('active')
		e.currentTarget.setAttribute('aria-expanded', active)

		if (active) {
			e.currentTarget.setAttribute('aria-label', 'fechar menu')
		} else {
			e.currentTarget.setAttribute('aria-label', 'abrir menu')
		}
	})
})
