import spinwheel from "../assets/spinwheel.png"
import guess from "../assets/guess.png"
import { useState } from "react"
export function GameCard() {
    const [link, setlink] = useState("")

    const handleClick = (link) => {
        setlink(link)
        window.open(link, "_blank")

    }

    return (<div className="flex gap-5">
        <div onClick={() => handleClick("https://logo-guesser.vercel.app/")} className="bg-red-500 rounded-3xl cursor-pointer w-50 h-60">


            <img className="rounded-3xl" src="https://store-images.microsoft.com/image/apps.24179.9007199266556635.2594eb8b-e6b3-4acf-8e57-443966a22148.d6ff63fa-5ac6-4587-bdbb-0b35d0adecfd" alt="Logo guesser" />
            <p className="text-white text-center text-xl font-bold">Tap to Play</p>




        </div>
        <div onClick={() => handleClick("https://spin-wheel-three-iota.vercel.app/")} className="bg-red-500 cursor-pointer rounded-3xl  w-50 h-60">


            <img className="rounded-3xl" src={spinwheel} alt="Logo guesser" />
            <p className="text-white text-center text-xl font-bold">Tap to Play</p>




        </div>
        <div onClick={() => handleClick("https://range-guesser.vercel.app/")} className="bg-red-500 cursor-pointer rounded-4xl  w-50 h-60">


            <img className="rounded-3xl" src={guess} alt="Logo guesser" />
            <p className="text-white text-center text-xl font-bold">Tap to Play</p>




        </div>



    </div>


    )

}

