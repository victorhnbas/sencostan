function sen(){
    const num = document.getElementById("num").value;
    const calc = Math.sin(parseFloat(num)).toFixed(5);
    const res = document.getElementById("saida");

    if (num === "") {
        res.textContent = "Digite algo.";
    } else {
        res.textContent = `${calc}`; 
    }
}

function cos(){
    const num = document.getElementById("num").value;
    const calc = Math.cos(parseFloat(num)).toFixed(5);
    const res = document.getElementById("saida");

    if (num === "") {
        res.textContent = "Digite algo.";
    } else {
        res.textContent = `${calc}`; 
    }
}

function tan(){
    const num = document.getElementById("num").value;
    const calc = Math.tan(parseFloat(num)).toFixed(5);
    const res = document.getElementById("saida");

    if (num === "") {
        res.textContent = "Digite algo.";
    } else {
        res.textContent = `${calc}`; 
    }
}