import React from 'react'

const Blog = async () => {

  await new Promise<void>((resolve) => setTimeout(() => resolve(), 300));

  return (
    <div className="bg-emerald-700">
      <div className="container flex flex-col items-center content-center justify-between h-[90vh] mx-auto">
        <h1 className="text-white my-auto font-extrabold text-xl">Blog</h1>
      </div>
    </div>
  )
}

export default Blog