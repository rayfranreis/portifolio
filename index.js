document.addEventListener("DOMContentLoaded", function() {
    const btnComprar = document.querySelectorAll(".btn-comprar");
    const modalCompra = new bootstrap.Modal(document.getElementById("modalCompra"));

    btnComprar.forEach(btn => {
        btn.addEventListener("click", function() {
            const nome = this.getAttribute("data-nome");
            const preco = parseFloat(this.getAttribute("data-preco")).toFixed(2);
            document.getElementById("produtoCompra").textContent = "Produto: " + nome;
           
