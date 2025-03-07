export const makeNewsBlocks = (news) => {

    if(!news) {
      console.log('There is no news');
      return;
    }
    const result = {};
  
    for (let item of news) {
      const currentDate = item.pub_date.split('T')[0];
      if (!result[currentDate]) {
        result[currentDate] = [item];
      } else {
        result[currentDate].push(item);
      }
    }
    return result;
  }