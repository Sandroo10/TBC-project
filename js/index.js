document.addEventListener("DOMContentLoaded", function () {

    const languageStuff = document.querySelector('.language-stuff');
    const langListWrapper = document.querySelector('.lang_list-wrapper');

    languageStuff.addEventListener('mouseover', function () {
        langListWrapper.style.display = 'block';
    });

    languageStuff.addEventListener('mouseout', function () {
        langListWrapper.style.display = 'none';
    });

    langListWrapper.addEventListener('mouseover', function () {
        langListWrapper.style.display = 'block';
    });

    langListWrapper.addEventListener('mouseout', function () {
        langListWrapper.style.display = 'none';
    });







    const dropdowns = document.querySelectorAll('.header_dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.header_dropdown-toggle');
        const list = dropdown.querySelector('.header_dropdown-list');

        toggle.addEventListener('click', function(event) {
            event.stopPropagation(); 
            const isOpen = list.style.display === 'flex';
            closeAllDropdowns(); 
            list.style.display = isOpen ? 'none' : 'flex';
        });
    });

    // Close all dropdowns
    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            const list = dropdown.querySelector('.header_dropdown-list');
            list.style.display = 'none';
        });
    }

    document.addEventListener('click', function() {
        closeAllDropdowns();
    });



    



    document.getElementById('collapse-button').addEventListener('click', function() {
        document.querySelector('.button-menu').classList.toggle('expanded');
    });

   
});
