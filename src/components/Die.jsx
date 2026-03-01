export default function Die(props) {
  let styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div
      className="px-4 py-2 m-auto shadow-lg rounded-md cursor-pointer"
      style={styles}
      onClick={props.held}
    >
      <h2 className="text-2xl">{props.value}</h2>
    </div>
  );
}
