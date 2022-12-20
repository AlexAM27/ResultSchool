export const createEndingForUserWord = (num) =>  {
    const lastDigitStr = String(num).slice(-1);
    switch(true) {
      case (((lastDigitStr ==='2') || (lastDigitStr ==='3') || (lastDigitStr ==='4')) && ((num < 10) || (num > 20))):
        return 'человека';
      default:
        return 'человек';
    }
  };