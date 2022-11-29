import React from 'react'

export function Home() {
    const [darkToggle, setDarkToggle] = React.useState(false)
    return (
        <div
            class={`h-screen w-full flex items-center justify-center bg-gray-300 flex-col ${darkToggle && 'dark'
                }`}
        >
            <label class="toggleDarkBtn">
                <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                <span class="slideBtnTg round"></span>
            </label>
            <div class="max-w-sm rounded overflow-hidden bg-gray-100 p-5 rounded-lg mt-4 text-white dark:bg-gray-900">
                <img
                    class="w-full"
                    src="https://v1.tailwindcss.com/img/card-top.jpg"
                    alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                    <div class="text-gray-800 dark:text-gray-200 font-bold text-xl mb-2">
                        The Coldest Sunset
                    </div>
                    <p class="text-gray-800 dark:text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptatibus quia, nulla! Maiores et perferendis eaque,
                        exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #winter
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Home