function handleSubmit() {
    // Coleta os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const feedback = document.getElementById("feedback").value;

    // Monta o conteúdo para exibir no modal
    const modalData = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
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

