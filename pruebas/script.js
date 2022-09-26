

function clikeando() {
    const text1 = document.getElementById("text1").value.toLowerCase();
    var texto = text1
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");

    document.getElementById("text2").value = texto;
    alert(texto)
}