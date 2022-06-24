export function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen px-5 bg-black">
      <div className="p-6 transition-all duration-500 bg-white drop-shadow-3xl rounded-3xl ring-4 ring-green-600 ring-offset-2">
        <div className="flex flex-col items-center text-gray-300">
          <span className="block w-24 h-24 border-4 rounded-full shadow border-t-black animate-spin"></span>
          <h1 className="mt-8 text-2xl tracking-widest uppercase">Loading...</h1>
        </div>
      </div>
    </div>
  )
}