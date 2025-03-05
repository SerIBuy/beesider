import New from "./New";
const BlockNews = ({title, news}: {title: string, news: string[]}) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {news.map((item) => (
          <New key={item.id}>{item}</New>
        ))}
      </ul>
    </section>
  );
};

export default BlockNews;