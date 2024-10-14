// Script for revealing extra information
const learnMoreBtn = document.getElementById('learn-more-btn');
const extraInfo = document.getElementById('extra-info');

learnMoreBtn.addEventListener('click', function() {
  if (extraInfo.style.display === 'none') {
    extraInfo.style.display = 'block';
    learnMoreBtn.textContent = 'Show less';
  } else {
    extraInfo.style.display = 'none';
    learnMoreBtn.textContent = 'Want to know more?';
  }
});
