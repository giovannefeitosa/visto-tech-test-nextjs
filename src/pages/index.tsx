import { Input } from "@mantine/core";
import React from "react";

const index = () => {
  return (
    <main className="p-6">
    <div>
      <h1 className="text-3xl mb-4">Visto Technical Test</h1>
      <p className="mb-6">This is using NextJS 12 - since this is what we currently use in production with Visto.</p>
      <p>What else is included in this project to develop the UI:</p>
      <ul className="list-disc mb-6">
        <li className="ml-8">Tailwinds CSS (we use this in production at Visto): https://tailwindcss.com/</li>
        <li className="ml-8">Mantine UI (we do not use this in production at Visto, but it is a simple UI library, feel free to use your own): https://mantine.dev/</li>
      </ul>
    </div>
    <div>
      <p>For example, here is an input:</p>
      <div className="bg-gray-100 p-6 rounded-md">
        <Input.Wrapper label="Input label">
          <Input />
        </Input.Wrapper>
      </div>
    </div>
    <p className="mt-12 bg-gray-300 p-6 rounded-md">Good luck! If you have any questions, please reach out to me directly at: alex@visto.ai</p>
    </main>
  )
 
}

export default index;