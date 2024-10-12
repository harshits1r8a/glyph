import  {useEffect, useState} from 'react'

import databasesservice from '../appwrite/databaseService';
import { Container, GlyphCard } from '../component';
const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        databasesservice.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  

    if (posts.length === 0) {
        return (
            
                <Container>
                    <div className="flex flex-wrap h-[70vh]">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            
        )
    }
    return (
        <div className='w-full '>
            <Container className='dark:bg-[#0d0d0d]'>
                <div className='flex flex-wrap justify-center gap-5 '>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 '>
                            <GlyphCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
