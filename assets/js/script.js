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

//const btnMobile = document.getElementById('btn-mobile')

/*function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')

    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'abrir menu')
    }

}
*/

//btnMobile.addEventListener('click', toggleMenu)
//btnMobile.addEventListener('touchstart', toggleMenu)



