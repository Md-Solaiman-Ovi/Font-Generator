const FontGenerator = () => {
  const data = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className="container space-y-5">
      <div className="  font-bold text-3xl">Font Generator App</div>
      <div className=" bg-slate-300 p-4 border-2 border-gray-400 rounded ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
        dolores nostrum molestias ducimus, eum minima vel illo harum quis
        accusamus sunt adipisci fugit blanditiis consequatur ad, quam laborum
        aliquam nemo?
      </div>
      <div className="border-2 font-bold p-4">
        <h2 className="">Upload images</h2>
        <div className="grid grid-cols-5 space-y-4 overflow-y-scroll h-80 ">
          {data.map((item) => (
            <div className="grid justify-center">
              <div className="">{item}</div>
              <div className="border-2 font-normal p-4">Image </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="bg-sky-500 text-white font-bold rounded py-1 px-4 ">Download</button>
      </div>
    </div>
  );
};

export default FontGenerator;
