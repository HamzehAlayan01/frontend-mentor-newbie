let shareBtn = document.querySelector('.share-img');
let shareLinks = document.querySelector('.share-box');

shareBtn.addEventListener('mouseenter', () => {
    shareLinks.style.display = 'flex';
});

// shareBtn.addEventListener('mouseleave', () => {
//     shareLinks.style.display = 'none';
// });
shareLinks.addEventListener('mouseenter', () => {
    shareLinks.style.display = 'flex';
});

shareLinks.addEventListener('mouseleave', () => {
    shareLinks.style.display = 'none';
});



