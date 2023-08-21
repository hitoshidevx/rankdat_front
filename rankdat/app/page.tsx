import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between p-16 flex-1 bg-zinc-900">
      <div className="flex flex-1 items-center">
        <h1 className="font-bold text-3xl text-purple-800">Rankdat</h1>
       
      </div>
      <div className="flex flex-col justify-between flex-1 items-end pr-20">
        
        <ul className="flex gap-14 ">
          <Link href="/login"><li className="border border-purple-500 rounded-2xl p-2 font-bold">Login</li></Link>
          <li className="border border-purple-600 rounded-2xl p-2 font-bold">Registrar-se</li>
        </ul>

        <div>
          <h2 className="text-2xl text-end font-bold">Faça parte do futoro dos games na</h2>
          <h2 className="text-2xl text-end font-bold">LOBBIT</h2>
        </div>

        <div>
          <h2 className="text-2xl text-end font-bold">Aqui sua criatividade vira realidade!</h2>
        </div>
      </div>
    </main> 
  )
}
