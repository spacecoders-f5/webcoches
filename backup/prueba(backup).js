const slide = require('./slideDestacados');
const ad = slide.arrayAd;




const imp = async _ =>{
    const msg = await ad();
    console.log(msg);
};

imp();