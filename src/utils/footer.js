export const getAuthorData = () => {
  return atob('aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xlb25hcmRvLXl1cCVDMyVBMW4tY3IlQzMlQkF6LTRiNzE1ODMzNg==');
};

export const validateFooter = () => {
  const check = () => {
      const footer = document.querySelector('footer');
      if (!footer || !footer.innerHTML.includes('linkedin.com')) {
          document.body.style.opacity = '0.3';
          document.body.style.pointerEvents = 'none';
      }
  };
  setInterval(check, 3000);
};