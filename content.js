const reviews = document.querySelectorAll('[data-hook="review"]');
console.log('Reviews found:', reviews.length);

const reviewArr = [];

for(let i=0;i<reviews.length;i++){
    reviewArr[i] = reviews[i].innerText;
    console.log(reviewArr[i]);
}

chrome.runtime.sendMessage({
  action: 'REVIEWS_FOUND',
  count: reviews.length
});
