// Swiper JS...........
    let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    }
    });

    // Nav Scroll.............
    let nav = document.querySelector('nav');

    window.addEventListener('scroll',()=>{
        nav.classList.toggle('navScroll',window.scrollY>0);
    });

    // Phone Menu.............

    let Open = document.querySelector('.open');
    let Close = document.querySelector('.close');
    let navlink = document.querySelector('.nav-link');

    Open.addEventListener('click',()=>{
        navlink.style.display='block';
        Open.style.display='none';
        Close.style.display='inline-block'
    });

    Close.addEventListener('click',()=>{
        navlink.style.display='none';
        Open.style.display='inline-block';
        Close.style.display='none'
    })