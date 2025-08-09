function handleSubmit() {
    // Coleta os dados do formulário
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const cap = document.getElementById("cap").value;
    const descricao = document.getElementById("descricao").value;

    // Monta o conteúdo para exibir no modal
    const modalData = `
        <p><strong>Titulo:</strong> ${titulo}</p>
        <p><strong>Autor:</strong> ${autor}</p>
        <p><strong>Capitulo:</strong> ${cap}</p>
        <p><strong>Descricao:</strong> ${descricao}</p>
    `;

    // Insere os dados no modal e exibe
    document.getElementById("modalData").innerHTML = modalData;
    openModal();
}

function clearForm() {
    // Limpa todos os campos do formulário
    document.getElementById("surveyForm").reset();
}

function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

