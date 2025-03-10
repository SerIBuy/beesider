import { INew } from "../../types/news";
import { ReactNode } from "react";

enum Months {
  Jen,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

const baseUrl = 'https://nytimes.com/';

const New = ({ref, element}:{
  ref?: React.Ref<HTMLLIElement> | undefined, 
  element: INew
}) => {

  const inputDate = new Date(element.pub_date);
  let hours = inputDate.getHours();
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const outputDate = `${Months[inputDate.getMonth()]} ${inputDate.getDate()}, ${inputDate.getFullYear()}, ${hours}.${inputDate.getMinutes()} ${amPm}`;

  const image = element.multimedia.find(el => el.subtype === 'thumbnail');
  const imageUrl = baseUrl + image?.url;

  return (
      <li ref={ref} className="new__container">
        <a href={element.web_url} className="new">
          <img src={imageUrl} width={image?.width} height={image?.height}/>
          <p className="new__abstract">{element.abstract}</p>
          <p className="new__date">{outputDate}</p>
        </a>
    </li>
  )
};

export default New;