import $ from 'jquery';

const sizer = () => {
  const currentHeight = window.innerHeight;
  const navHeight = $('nav').outerHeight();
  $('.height').css('min-height', `${currentHeight - navHeight}px`);
};

const sizingEvent = () => $(window).resize(sizer);

const sizeInit = () => {
  sizingEvent();
  sizer();
};

export default { sizeInit };
