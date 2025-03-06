import New from "./New";

const BlockNews = ({date, newsList}) => {

  const blockDate = date.split('-').reverse().join('.');

  return (
    <section>
      <h2 className="font-bold uppercase">{blockDate}</h2>
      <ul className="flex flex-col gap-4">
        {newsList.map((item, index) => (
          <New key={index} element={item}/>
        ))}
      </ul>
    </section>
  );
};

export default BlockNews;