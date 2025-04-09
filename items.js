
document.addEventListener('DOMContentLoaded', function () {
    const item1 = document.querySelector('.item-1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Объект виден - добавляем класс 'show'
                item1.classList.remove('show');
            } else {
                // Объект не виден - удаляем класс 'show' (и возвращаем в исходное состояние)
                item1.classList.add('show');

                // Сбрасываем стили (важно для повторной анимации)
                item1.style.top = '300px';
                item1.style.left = '250px';
                item1.style.opacity = '0';

                // force reflow to trigger the transition from beginning
                void item1.offsetWidth;

                item1.style.top = '';
                item1.style.left = '';
                item1.style.opacity = '';
            }
        });
    });

    observer.observe(item1); // Начинаем наблюдение за элементом item-1
});




document.addEventListener('DOMContentLoaded', function () {
    const item2 = document.querySelector('.item-2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Объект виден - добавляем класс 'show'
                item2.classList.remove('show');
            } else {
                // Объект не виден - удаляем класс 'show' и сбрасываем стили
                item2.classList.add('show');

                // Сбрасываем стили для перезапуска анимации
                item2.style.top = '340px';
                item2.style.right = '260px';
                item2.style.opacity = '0';

                // force reflow to trigger the transition from beginning
                void item2.offsetWidth;

                item2.style.top = '';
                item2.style.right = '';
                item2.style.opacity = '';
            }
        });
    });

    observer.observe(item2); // Начинаем наблюдение за элементом item-2
});


document.addEventListener('DOMContentLoaded', function () {
    const item3 = document.querySelector('.item-3');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Объект виден - добавляем класс 'show'
                item3.classList.remove('show');
            } else {
                // Объект не виден - удаляем класс 'show' и сбрасываем стили
                item3.classList.add('show');

                // Сбрасываем стили
                item3.style.bottom = '200px';
                item3.style.left = '500px';
                item3.style.opacity = '0';

                // force reflow to trigger the transition from beginning
                void item3.offsetWidth;

                item3.style.bottom = '';
                item3.style.left = '';
                item3.style.opacity = '';
            }
        });
    });

    observer.observe(item3); // Начинаем наблюдение за элементом
});


document.addEventListener('DOMContentLoaded', function () {
    const item4 = document.querySelector('.item-4');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                item4.classList.remove('show');
            } else {
                item4.classList.add('show');

                item4.style.bottom = '300px';
                item4.style.left = '200px';
                item4.style.opacity = '1';

                // force reflow to trigger the transition from beginning
                void item4.offsetWidth;

                item4.style.bottom = '';
                item4.style.left = '';
                item4.style.opacity = '';
            }
        });
    });

    observer.observe(item4);
});


document.addEventListener('DOMContentLoaded', function () {
    const item5 = document.querySelector('.item-5');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                item5.classList.remove('show');
            } else {
                item5.classList.add('show');

                item5.style.bottom = '200px';
                item5.style.right = '200px';
                item5.style.opacity = '1';

                // force reflow to trigger the transition from beginning
                void item5.offsetWidth;

                item5.style.bottom = '';
                item5.style.right = '';
                item5.style.opacity = '';
            }
        });
    });

    observer.observe(item5);
});