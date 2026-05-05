import { useEffect, useState } from "react";
import logo from "../assets/logo2.png"
import { Card } from "../components/Card";
import { Sidebar } from "../components/sidebar"
import { Topbar } from "../components/topbar";
import axios from "axios";
import { BACKEND_URL } from "../config";







export function Dashboard() {



    return (
        <div>

            <div>
                <Topbar />

            </div>
            <div className="">
                <Sidebar />




            </div>
            <div>

            </div>


        </div>
    );
}