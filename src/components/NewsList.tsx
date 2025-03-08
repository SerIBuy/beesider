import BlockNews from "./BlockNews";

const NewsList = ({blocks}) => {

    const dates = Object.keys(blocks);

  return (
    <>
    {dates.map((item, index) => (
        <BlockNews key={index} date={item} newsList={blocks[item]}/>
    ))}
    </>
  );
};

export default NewsList;