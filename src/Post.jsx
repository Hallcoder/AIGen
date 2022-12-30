function Post2({pic,desc}) {
  return (
    <div className="m-2 border rounded-md text-xs">
      <span>
        <img src={pic} width="400px" height={"400px"}></img>
      </span>
      <span>
        <h1>{desc}</h1>
      </span>
    </div>
  );
}

export default Post2;
