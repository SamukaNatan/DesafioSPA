import { Router } from "./router.js"

    const router = new Router()
    router.add('/', '/pages/home.html')
    router.add('/uni', '/pages/uni.html')
    router.add('/exp', '/pages/exp.html')

    router.handle()

    window.onpopstate = () => router.handle()
    window.route = () => router.route()

    let body = document.querySelector('body')
    const home = document.querySelector('.home')
    const universe = document.querySelector('.universe')
    const explorer = document.querySelector('.explore')

    home.addEventListener('click', function() {
        body.classList.add('bg1')
        body.classList.remove('bg2')
        body.classList.remove('bg3')

        home.classList.add('colorchange')
        universe.classList.remove('colorchange')
        explorer.classList.remove('colorchange')
    })

    universe.addEventListener('click', function() {
        body.classList.add('bg2')
        body.classList.remove('bg1')
        body.classList.remove('bg3')

        home.classList.remove('colorchange')
        universe.classList.add('colorchange')
        explorer.classList.remove('colorchange')
    })

    explorer.addEventListener('click', function() {
        body.classList.add('bg3')
        body.classList.remove('bg1')
        body.classList.remove('bg2')

        home.classList.remove('colorchange')
        universe.classList.remove('colorchange')
        explorer.classList.add('colorchange')
    })
