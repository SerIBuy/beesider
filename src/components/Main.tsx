import BlockNews from "./BlockNews";
const Main = ({blocks}) => {
  return (
    <main>
      {blocks.map((block) => (
        <BlockNews key={block.id} title={block.title} news={block.news} />
      ))}
    </main>
  );
};

export default Main;