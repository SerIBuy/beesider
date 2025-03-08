
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

const New = ({ref, element}) => {

  const inputDate = new Date(element.pub_date);
  let hours = inputDate.getHours();
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const outputDate = `${Months[inputDate.getMonth()]} ${inputDate.getDate()}, ${inputDate.getFullYear()}, ${hours}.${inputDate.getMinutes()} ${amPm}`;

  const image = element.multimedia.find(el => el.subtype === 'thumbnail');
  const imageUrl = baseUrl + image?.url;

  return (
    <a href={element.web_url}>
      <li ref={ref} className="grid grid-cols-2">
      <img src={imageUrl} width={image?.width} height={image?.height}/>
      <p>{element.abstract}</p>
      <p className="newDate">{outputDate}</p>
    </li>
    </a>
  )
};

export default New;