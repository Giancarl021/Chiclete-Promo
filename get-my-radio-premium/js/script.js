function init() {
    const digitDivs = document.getElementsByClassName('digit-text');

    for (const div of digitDivs) {
        digitFx(div, div.getAttribute('data-text'), div.getAttribute('data-milliseconds'), div.getAttribute('data-start')).catch(console.log);
    }

    async function digitFx(element, text, milliseconds, start = 0) {
        if(start) {
            await delay(start);
        }
        if(text.length === 0) return;
        element.innerHTML += text.charAt(0).replace(' ', '&nbsp');
        await delay(milliseconds);
        digitFx(element, text.substr(1), milliseconds).catch(console.log);
    }
}

async function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

document.addEventListener('DOMContentLoaded', init);