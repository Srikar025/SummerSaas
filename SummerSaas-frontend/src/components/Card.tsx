
import { motion, AnimatePresence } from "framer-motion"

interface CardProps {
    data: any
    isOpen: any
}
export function Card({ data, isOpen }: CardProps) {

    return (<AnimatePresence mode="wait">

        {isOpen && (
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -25, opacity: 0 }}
                transition={{ duration: 0.3 }}

            >


                <div className="p-4 m-4 bg-white rounded-md border-gray-200 max-w-72 border min-h-100 shadow-xl min-w-80">
                    <h2 className=" flex justify-center text-xl text-black fond-bold-600 mb-2">
                        {data.teamname}

                    </h2>
                    <p className=" flex justify- items-start  ">
                        <p className="p-2 text-red-950 font-semibold">ParticipantName:</p>

                        <p className="p-2">{data.participantname}</p>
                    </p>
                    <p className=" flex justify- items-start  ">
                        <p className="p-2 text-red-950 font-semibold">Leader:</p>

                        <p className="p-2">{data.teamleadername}</p>
                    </p>
                    <p className=" flex justify- items-start  ">
                        <p className="p-2 text-red-950 font-semibold">College:</p>
                        <p className="p-2">{data.college}</p>
                    </p>
                    <p className=" flex justify- items-start  ">
                        <p className="p-2 text-red-950 font-semibold">Year:</p> <p className="p-2">{data.studyyear}</p>
                    </p>
                    <p className=" flex justify- items-start  ">
                        <p className="p-2 text-red-950 font-semibold">Trackpreference:</p>  <p className="p-2">{data.trackpreference}</p>
                    </p>
                    <p className=" flex justify- items-start  ">
                        <p className="p-2 text-red-950 font-semibold">TeamMembers:</p>
                        <p className="p-2">{data.teammembername}</p>
                    </p>






                </div>
            </motion.div>
        )}

    </AnimatePresence>
    )
}