const apiUrl = 'http://127.0.0.1:5500/api/cursos'; // Substitua pela URL real da API

const cursosContainer = document.getElementById('cursos-container');

let cursos = []

function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}


async function listarCursos() {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Erro ao carregar cursos');
        }
        
        cursos = await response.json();
        renderizarCursos(cursos);
        
        if (loadingMessage) {
            loadingMessage.style.display = 'none';
        }
    } catch (error) {
        console.error('Erro:', error);
        showAlert('Erro ao carregar lista de cursos', 'error');
        if (loadingMessage) {
            loadingMessage.textContent = 'Erro ao carregar cursos';
            loadingMessage.style.color = '#e74c3c';
        }
    }
}

function renderizarCursos(cursos) {
    const container = document.querySelector('.cursos-container');
    container.innerHTML = '';

    cursos.forEach(curso => {
        const card = document.createElement('div');
        card.classList.add('curso-card');

        card.innerHTML = `
            <h3>${curso.titulo}</h3>
            <p>Categoria: ${curso.categoria}</p>
            <p>Nível: ${curso.nivel}</p>
            <p>${curso.descricao}</p>
        `;

        container.appendChild(card);
    });
}