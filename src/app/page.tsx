
import Image from 'next/image'
import { Editor } from './components/Editor'

export default function Home() {
  return (
    <div className='min-h-screen p-8 text-zinc-50 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'>
      <div className='bg-zinc-900 w-[1100px] mx-auto rounded-xl min-h-[620px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]'>
        <aside className='bg-zinc-900 border-r border-r-zinc-700 p-4'>
          <div className='flex gap-2 group'>
            <button className='w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400'></button>
            <button className='w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400'></button>
            <button className='w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400'></button>
          </div>
        </aside>
        <main className='p-4'>
          <Editor />
        </main>
      </div>
    </div>
  )
}
