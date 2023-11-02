import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Nelvim",
      username: "stinky",
      userImg: "https://lh3.googleusercontent.com/a/ACg8ocI3jgfBOxopJLgFsOeX4qK8jFSTLYe1AMMzBRc_08ZWmQ=s288-c-no",
      img: "https://images.unsplash.com/photo-1558304970-abd589baebe5?auto=format&fit=crop&q=80&w=1172&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Chill lang",
      timestamp: "3 minutes ago"
    },
    {
      id: "2",
      name: "Nelvim",
      username: "stinky",
      userImg: "https://lh3.googleusercontent.com/a/ACg8ocI3jgfBOxopJLgFsOeX4qK8jFSTLYe1AMMzBRc_08ZWmQ=s288-c-no",
      img: "https://images.unsplash.com/photo-1605987047300-3060e81e131c?auto=format&fit=crop&q=80&w=1287&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Chill lang sa",
      timestamp: "4 minutes ago"
    },
  ]
  return (
    <div className=" xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl ">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input/>
        {posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}
