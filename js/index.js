document.addEventListener('DOMContentLoaded', function () {
    function setupCardSelection(sectionId) {
        const container = document.querySelector(`#${sectionId} .d-flex`);
        const cards = container.querySelectorAll('.card');

        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                // Remove destaque de todos
                cards.forEach(c => {
                    c.classList.remove('card-large', 'shadow-lg', 'border-primary', 'border-success', 'border-3');
                    c.classList.add('card-small', 'shadow-sm');
                    c.style.order = ''; // Reset order
                });

                // Adiciona destaque ao card clicado
                card.classList.remove('card-small', 'shadow-sm');
                card.classList.add('card-large', 'shadow-lg');

                // Define borda de acordo com a seção
                if (sectionId === 'convidados') {
                    card.classList.add('border-primary', 'border-3');
                } else if (sectionId === 'envolvidos') {
                    card.classList.add('border-success', 'border-3');
                }

                // Centraliza o card clicado usando flex order
                const total = cards.length;
                cards.forEach((c, i) => {
                    if (c === card) {
                        c.style.order = Math.floor(total / 2); // card no centro
                    } else if (i < index) {
                        c.style.order = i;
                    } else {
                        c.style.order = i + 1;
                    }
                });
            });
        });
    }

    // Inicializa para convidados e alunos
    setupCardSelection('convidados');
    setupCardSelection('envolvidos');
});
