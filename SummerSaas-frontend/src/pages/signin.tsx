
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import logo from "../assets/logo2.png"
export function Signin() {
    return <div className="h-screen w-screen bg-orange-50 flex justify-center items-center">
        <div className="bg-gradient-to-t from-orange-500 via-orange-250 to-orange p-4 rounded-xl border min-w-48 border-white p-4 py-20">
            <div className="text-slate-500 items-center  font-bold drop-shadow">
                <div className="flex justify-center">
                    <img src={logo} alt="logo" className="w-70 pl-2" />

                </div>
                <br />

                <br />
                <h1 className=" text-center text-2xl" >Login with your Registration Id</h1>
                <br />
                <br />
                <div className="items-center flex justify-center ">
                    <Input placeholder="Username" />

                </div>
                <div className="items-center flex justify-center ">


                    <Input placeholder="Password" />
                </div>


                <br />
                <br />
                <div className="flex  justify-center p-2 py-2 ">
                    <Button variant="secondary" size="lg" text="Get Started" />
                </div>
                <br />
                <div className="flex  justify-center p-2 py-2 ">
                    <h1 className=" text-center" >Don't have an Id?</h1>

                </div>
            </div>

        </div>

    </div>
}



