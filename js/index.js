let div = 55
let ul = document.querySelector('ul')

function main() {
    // localStorage.clear() // to restore order and counters
    ul.innerHTML = localStorage.getItem('order') || ul.innerHTML
    for (let i = 0; i <= div; i++) {
        let nbClick = localStorage.getItem('b' + i)
        if (nbClick) {
            document.querySelector('#b' + i).innerText = nbClick
        }
    }

    sortable('.sortable', {
        forcePlaceholderSize: true,
    	placeholderClass: 'ghost'
    })
}



document.querySelector('#app').addEventListener('click', function (ev) {
    let e = ev.target
    if (e.tagName == 'BUTTON') {
        let sound = 'media/' + e.id.slice(1) + '.ogg'
        new Audio(sound).play()
        e.innerText = Number(e.innerText) + 1
        localStorage.setItem(e.id, e.innerText)
    }
})

document.querySelector('.sortable').addEventListener('sortupdate', function() {
    localStorage.setItem('order', ul.innerHTML)
})

main()
