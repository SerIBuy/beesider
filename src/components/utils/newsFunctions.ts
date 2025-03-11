import { INew } from "../../types/news";

export const makeNewsBlocks = (news: INew[]) => {

    if(!news) {
      console.log('There is no news');
      return;
    }
    const result: {[key: string]: INew[]} = {};
  
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