
const New = ({index, style, data}: {index: number, style: React.CSSProperties, data: any[]}) => {
  const item = data[index];
  return (
    <div className="w-{320px}" style={style} key={index}>
      <h3>{item.abstract}</h3>
      <p>{item.web_url}</p>
      <p>{item.pub_date}</p>
    </div>
  )
};

export default New;