import { House, Search, Plus, Heart, User, Pin, ChartNoAxesGantt } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import posts from '../../data.js'

export default function HomePage() {

    const icons = [<House />, <Search />, <Plus />, <Heart />, <User />]

    return <main className="relative w-full h-screen flex justify-center">
            <div id="sidebar" className="absolute top-0 left-0 flex flex-col p-1 gap-1 text-white w-fit h-screen justify-between overflow-hidden">
            <img width={50} className="mt-4" src="https://imgs.search.brave.com/rTqLp49IG2f1b1cKq2vgT8Rswfjt-ZRQ1D6AjteAsTw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YXByb3h5LnNub3Bl/cy5jb20vd2lkdGgv/NjAwL2h0dHBzOi8v/bWVkaWEuc25vcGVz/LmNvbS8yMDIzLzA3/L3RocmVhZHNfbG9n/by5wbmc"/>
              <div id="icons" className="flex flex-col items-center p-1 gap-6">
                 {icons.map((icon,i) => {
                    return <span key={i} className={twMerge('text-zinc-500 p-3 rounded-lg w-full cursor-pointer', i == 0 && "text-white", i == 2 && "text-zinc-400 bg-zinc-800", i != 2 && "hover:bg-zinc-800 duration-150")}>{icon}</span>
                 })}
              </div>
              <div id='icons2' className='flex flex-col p-1 gap-5 items-center mb-3'>
                  <span className='text-zinc-500 p-3 rounded-lg w-full cursor-pointer hover:bg-zinc-800 duration-150'><Pin /></span>
                  <span className='text-zinc-500 p-3 cursor-pointer hover:text-white duration-100'><ChartNoAxesGantt /></span>
              </div>
            </div>
            <div id='posts' className='flex flex-col p-1 gap-1 w-[45%] text-white bg-[#252424] rounded-tl-2xl rounded-tr-2xl mt-36 overflow-auto'>
                 {posts.map((post,i) => {
                    return <div key={i} className='p-1'>
                         <div className='flex p-1 gap-2 w-fit items-center'>
                          <img width={40} className='rounded-full' src={post.userImage}/>
                          <h3 className='text-sm tracking-wider'>{post.username}</h3>
                        </div>
                        <div id='text' className='text-[0.8rem] text-left'>
                           {post.content}
                        </div>  
                        <img width={200} className='rounded-md' src='https://imgs.search.brave.com/m_HbRkHHxsvwizh6FumS-GIr54JOQSOaNjf5SOaI55M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg1LzRj/LzRmLzg1NGM0Zjhk/NGY0NTg4ODUxZmNh/ZWZlODQ2ZWJmOWEx/LmpwZw'/>
                    </div>
                 })}
            </div>
        </main>
}