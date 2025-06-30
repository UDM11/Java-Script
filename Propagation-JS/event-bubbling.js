document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', (e) => {
  console.log('Button clicked');
  // e.stopPropagation(); // stops bubbling if uncommented
});
