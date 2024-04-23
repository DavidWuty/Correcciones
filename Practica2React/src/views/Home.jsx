import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import SpanishHome from "../components/SpanishHome"
import EnglishHome from "../components/EnglishHome"
import GeneralHome from "../components/GeneralHome"

function Home() {
  const [component, setComponent] = useState(null)
  const [countryCode, setCountryCode] = useState("xx") 
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get("http://api.ipify.org?format=json")
        const ip = response.data.ip 
        const responseCC = await axios.get(
          `http://ipapi.co/${ip}/countrycode`
        )
        setCountryCode(responseCC.data)
      } catch (error){
        console.error("Error de IP:", error)
      }
    }
    fetchIP()
  }, [])

  useEffect(() => {
    switch (countryCode){
      case "MX":
        setComponent(<SpanishHome />)
        break
        case "US":
          setComponent(<EnglishHome />)
          break
          default:
            setComponent(<GeneralHome />)
    }
  }, [countryCode])

  return <>{component}</>
  
}

export default Home