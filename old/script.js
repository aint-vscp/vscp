var loadingScreen = document.querySelector('.loading_screen');
var main_screen = document.querySelector('.main_screen');

function disableScroll() {
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';
}

function enableScroll() {
    document.body.style.overflowY = 'scroll';
    document.body.style.overflowX = 'hidden';
}

disableScroll();
loadingScreen.addEventListener('animationend', function() {
    loadingScreen.classList.add('end');
    
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        enableScroll();
    }, 1000); 
});

window.addEventListener('scroll', function() {
    var page1 = document.querySelector('.page1');
    var page2 = document.querySelector('.page2');
    var baybayin = document.querySelector('.baybayin');
    var banner = document.querySelector('.banner');
    var bannerWidth = parseInt(getComputedStyle(banner).width);
    var aboutme = document.querySelector('.aboutme');
    var page1Rect = page1.getBoundingClientRect();
    var page2Rect = page2.getBoundingClientRect();
    var scrollY = window.scrollY;
    var viewportWidth = window.innerWidth;

    var baybayinLeft = Math.min(120, (50 + (scrollY - page1Rect.top) / page1Rect.height * 100)) + '%';
    var bannerLeft = Math.min(-bannerWidth, (scrollY - page2Rect.top) / page2Rect.height * 100) + '%';
    
    var aboutmeLeft = Math.min(165, (75 + (scrollY - page2Rect.top) / page2Rect.height * 100)) + '%';
    if (viewportWidth <= 768) {
        aboutmeLeft = '0%';
    }

    if (scrollY > page1Rect.top + page1Rect.height) {
        baybayin.style.top = 'calc(50% - 60px)';
        baybayin.style.transform = 'translate(0, -50%)';
        banner.style.left = '0';
        aboutme.style.left = 'calc(' + aboutmeLeft + ' - 100vw)';
    } else {
        baybayin.style.left = baybayinLeft;
        baybayin.style.top = 'calc(50% - 60px)';
        baybayin.style.transform = 'translate(-50%, -50%)';
        banner.style.left = bannerLeft;
        aboutme.style.left = aboutmeLeft;
    }
});

// Scheduler

document.getElementById("scheduleBtn").addEventListener("click", function() {
    var calendarPopup = document.getElementById("calendarPopup");
    calendarPopup.style.display = "block";
    setTimeout(function() {
        calendarPopup.style.opacity = "1";
        disableScroll();
    }, 500);
});

document.querySelector(".x").addEventListener("click", function() {
    var calendarPopup = document.getElementById("calendarPopup");
    calendarPopup.style.opacity = "0";
    setTimeout(function() {
        calendarPopup.style.display = "none";
        enableScroll();
    }, 500);
});

document.querySelector(".x").addEventListener("click", function() {
    var calendarPopup = document.getElementById("calendarPopup");
    calendarPopup.style.opacity = "0";
    setTimeout(function() {
        calendarPopup.style.display = "none";
        enableScroll();
    }, 500); // Adjust the delay to match your CSS transition duration
});
