
function showAnimal(animalId) {
  const animals = document.querySelectorAll('.animal');
  animals.forEach(a => a.classList.remove('active'));
  document.getElementById(animalId).classList.add('active');
}
