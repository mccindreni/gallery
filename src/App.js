import { useState } from "react";
function App() {
  const posts = [
    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },
    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },    {
      featuredImage:
      "/assets/gallery/1.png",
      title:'Title 1',
      excerpt:'Here is the post content',
      link:'/'
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <>
    <div className="flex flex-col gap-4 justify-between p-4">
      <h1 className="text-7xl text-center font-bold">Gallery</h1>
      <div className="flex-1 grid gap-4 my-20 grid-cols-4 grid-rows-1 overflow-hidde"  >
        {posts.map((post,index)=>{
        return <div className="relative" onMouseEnter={() => setSelectedPhoto(index)} onMouseLeave={() => setSelectedPhoto(null)}  >
        <img className="object-cover w-full h-[200px]" alt="" src={post.featuredImage}   />
        {selectedPhoto==index && <div className="bg-gray-600 absolute top-0 z-20 w-full h-full bg-opacity-60 text-white">
          <div className=" h-full flex flex-col items-center gap-2 justify-center">
           <h1 className="text-3xl font-bold">{post.title}</h1> 
           <p className="">{post.excerpt}</p>
          </div>
          </div>}
        </div>})
        }
      </div>
    </div>
    </>
  );
}

export default App;
