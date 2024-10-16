import posts from '../../data.js'
import Sidebar from '../components/Sidebar.jsx'

export default function HomePage() {

    return <main className="relative w-full h-screen flex justify-center">
               <Sidebar />
            <div id='posts' className='flex flex-col p-1 gap-1 w-[45%] text-white bg-[#252424] rounded-tl-3xl rounded-tr-3xl mt-20 overflow-auto'>
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