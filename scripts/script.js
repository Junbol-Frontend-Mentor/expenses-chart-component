document.addEventListener('DOMContentLoaded', function () {
  console.log('JavaScript file is connected');

  let myHamburgerIcon = document.getElementById('hamburgerIcon');
  let myNavMenu = document.getElementById('navigationMenu');
  let mySeeAll = document.getElementById('seeAllId');
  let creationsGridContainer = document.querySelector('.creationsGridContainer');
  let extraCards = document.querySelectorAll('.creationsGridContainer__card.hide');

  myHamburgerIcon.addEventListener('click', function () {
    myHamburgerIcon.classList.toggle('change');
    myNavMenu.classList.toggle('navTop_container__navMenu--visible');
  });

  mySeeAll.addEventListener('click', function () {
    extraCards.forEach(card => {
      card.classList.toggle('hide');//Each extra card's hide class is toggled. If the card is hidden, it becomes visible, and vice versa.
    });
    creationsGridContainer.classList.toggle('expanded'); // 🟢 Toggle (Remove or Add) the expanded class
    creationsGridContainer.classList.toggle('collapsed'); // 🟢 Toggle (Remove or Add) the collapsed class
  });
});
