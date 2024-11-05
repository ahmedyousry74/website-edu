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



document.querySelector('.formFileOne').addEventListener('change', function (event) {
    const previewContainer = document.getElementById('previewContainerOne');
    previewContainer.innerHTML = '';

    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '150px';
            img.alt = 'Uploaded Preview';
            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});


document.querySelector('.formFileTwo').addEventListener('change', function(event) {
    const previewContainer = document.getElementById('previewContainerTwo');
    previewContainer.innerHTML = '';

    const files = event.target.files;

    Array.from(files).forEach((file) => {
        const fileType = file.type;
        const reader = new FileReader();

        if (fileType.startsWith('image/')) {
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100%';
                img.style.maxHeight = '150px';
                img.alt = 'Uploaded Preview';
                img.style.margin = '5px';

                previewContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        } else if (fileType === 'application/pdf') {
            const pdfIcon = document.createElement('img');
            pdfIcon.src = '../../assets/images-store/pdf.jpg';
            pdfIcon.alt = 'PDF Preview';
            pdfIcon.style.width = '100px';
            pdfIcon.style.height = '100px';
            pdfIcon.style.marginBottom = '10px';
            pdfIcon.style.margin = '5px';

            const pdfLink = document.createElement('a');
            reader.onload = function(e) {
                pdfLink.href = e.target.result;
                pdfLink.textContent = 'View PDF';
                pdfLink.target = '_blank';
                pdfLink.style.display = 'block';

                previewContainer.appendChild(pdfIcon);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Unsupported file type. Please upload an image or PDF.');
        }
    });
});