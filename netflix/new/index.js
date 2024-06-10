
  function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  }
