import { useEffect } from "react"

const ToggleOn = () => {
 
  // this useEffect will only run when the component unmounted / destroyed
  useEffect(() => {
    // Add your cleanup logic here
    return () => {
      console.log('ToggleOn Component is unmounted')
    }
  })

  return (
    <>
      Toggle On Component
    </>
  )
}

export default ToggleOn