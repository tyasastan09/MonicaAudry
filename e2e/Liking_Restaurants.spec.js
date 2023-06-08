Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
})

Scenario('showing empty liked restaurants',  ({ I }) => {
    I.seeElement('#query');
    I.waitForElement('.restaurant-item__not__found', 30); // Waktu tunggu selama 30 detik
    I.see('Tidak ada restaurantt untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', (I) => {
    I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
  
    I.amOnPage('/');
    // … kita akan mengisi uji coba berikutnya …
});
