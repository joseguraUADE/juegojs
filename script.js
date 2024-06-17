document.addEventListener('DOMContentLoaded', () => {
    const residueElement = document.getElementById('residue');
    const buttons = document.querySelectorAll('.option');
    const message = document.getElementById('message');
  
    const residues = [
      { type: 'paper', name: 'Papel' },
      { type: 'plastic', name: 'Botella de gaseosa' },
      { type: 'glass', name: 'Botella de vino' },
      { type: 'organic', name: 'Cáscara de banana' }
    ];
  
    let currentResidue = getRandomResidue();
  
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        const selectedType = event.target.getAttribute('data-type');
        checkAnswer(selectedType);
      });
    });
  
    function getRandomResidue() {
      const randomIndex = Math.floor(Math.random() * residues.length);
      const residue = residues[randomIndex];
      residueElement.textContent = residue.name;
      return residue;
    }
  
    function checkAnswer(selectedType) {
      if (selectedType === currentResidue.type) {
        message.textContent = '¡Correcto!';
        message.style.color = 'green';
      } else {
        message.textContent = 'Inténtalo de nuevo.';
        message.style.color = 'red';
      }
      currentResidue = getRandomResidue();
    }
  });
  