import header from "./components/header";
import body from "./components/body";
import footer from "./components/footer";

function App() {

  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16">
      <header/>
      <footer/>
      <body/>
      </div>
    </>
  )
}

export default App
