import { GameCard } from "./GameCard";
import { motion, AnimatePresence } from "framer-motion"

export function Game({ ISopen }: { ISopen: any }) {
    return (<AnimatePresence mode-="wait">
        {
            ISopen && (
                <motion.div
                    initial={{ y: -25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className=" flex justify-center bg-cyan-200 items-center w-200 rounded-xl h-100 shadow-xl">

                    <div className="">
                        <GameCard />
                    </div>

                </motion.div>
            )

        }
    </AnimatePresence>
    )
}

