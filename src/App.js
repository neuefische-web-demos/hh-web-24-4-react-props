import "./styles.css";

export default function App() {
  // ich mache was, kalkuliere, scharfsinnig
  const isCool = true;

  function handleDoSomething() {
    console.log("bla");
  }

  return <TwoButtons brokkoli={isCool} onDoSomething={handleDoSomething} />;
}

const soSehenDiePropsAus = {
  brokkoli: true,
  onDoSomething: () => {
    console.log("bla");
  },
};

function TwoButtons({ brokkoli, onDoSomething }) {
  return (
    <>
      <button onClick={onDoSomething}>1</button>
      {brokkoli ? <button>2</button> : <></>}
    </>
  );
}
