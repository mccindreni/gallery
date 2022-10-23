function App() {
  const images = [
    "/assets/gallery/1.png",
    "/assets/gallery/2.png",
    "/assets/gallery/3.png",
    "/assets/gallery/1.png",
    "/assets/gallery/2.png",
    "/assets/gallery/3.png",
    "/assets/gallery/1.png",
    "/assets/gallery/2.png",
    "/assets/gallery/3.png",
    "/assets/gallery/1.png",
    "/assets/gallery/2.png",
    "/assets/gallery/3.png",
  ];
  return (
    <div className="flex flex-col gap-4 justify-between p-4">
      <h1 className="text-7xl text-center font-bold">Gallery</h1>
      <div className="flex-1 grid gap-4 my-20 grid-cols-4 grid-rows-1 overflow-hidden">
        {images.map((image)=>{
        return <img className="object-cover w-full h-[200px]" alt="" src={image} />})}
      </div>
    </div>
  );
}

export default App;
