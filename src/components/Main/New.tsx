import { INew } from "../../types/news";
import { forwardRef } from "react";

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

const New = forwardRef<HTMLLIElement, { element: INew }>(({ element }, ref) => {
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
        <img className="new__image" src={imageUrl} width={99} height={74}/>
        <h2 className="new__title">{element.source}</h2>
        <p className="new__abstract">{element.abstract}</p>
        <p className="new__date">{outputDate}</p>
      </a>
    </li>
  );
});

export default New;
