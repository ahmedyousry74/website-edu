function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}


document.addEventListener("DOMContentLoaded", function () {
    const largeImage = document.querySelector('.large_image');
    const smallImages = document.querySelectorAll('.small_image');
    smallImages.forEach(smallImage => {
        smallImage.addEventListener('click', function () {
            largeImage.src = smallImage.src;
        });
    });
});

document.querySelectorAll('.toggleButton').forEach(button => {
    button.addEventListener('click', function () {
        const heartIcon = this.querySelector('.heartIcon');
        heartIcon.classList.toggle('active');
    });
});


//عشان تغير زرار الاكتيف على السايذ فالموديل
$(".size-button").click(function () {
    $('.size-button.active').not(this).removeClass('active');
    $(this).toggleClass('active');
})


//عشان تغير زرار الاكتيف على السايذ فالموديل
$(".color-button").click(function () {
    $('.color-button.active').not(this).removeClass('active');
    $(this).toggleClass('active');
})



document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const categoriesList = document.getElementById('categoriesList');

    // Initially hide the categories list
    categoriesList.style.display = 'none';

    // Toggle categories list on button click
    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation();
        if (categoriesList.style.display === 'none') {
            categoriesList.style.display = 'block';
        } else {
            categoriesList.style.display = 'none';
        }
    });

    // Hide categories list when clicking outside
    document.addEventListener('click', function (event) {
        if (!categoriesList.contains(event.target) && !toggleButton.contains(event.target)) {
            categoriesList.style.display = 'none';
        }
    });
});
