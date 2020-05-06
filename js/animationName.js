(function () {
            
    let message = "Hector";
    let concludeMessage = "Silva =)";
    new Promise((resolve, reject) => {
        const typeWritter = (texto, idElemento, tempo) => {
            let char = texto.split('').reverse();
            let typer = setInterval(function () {
                if (!char.length) return clearInterval(typer);
                let next = char.pop();
                document.getElementById(idElemento).innerHTML += next;
            }, tempo);
            setTimeout(()=>{
                resolve();
            }, 2000);
        }
        typeWritter(message, 'name', 200);
    }).then(() => {
        const typeWritter = (texto, idElemento, tempo) => {
            let char = texto.split('').reverse();
            let typer = setInterval(function () {
                if (!char.length) return clearInterval(typer);
                let next = char.pop();
                document.getElementById(idElemento).innerHTML += next;
            }, tempo);
        }
        typeWritter(concludeMessage, 'conclude__name', 100);
    })
}());
