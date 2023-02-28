import useLocalStorage from "./hooks/useLocalStorage"
export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const handelClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
    document.documentElement.classList.toggle('dark-theme');
  }
  console.log(theme === "dark")
  if (theme == "dark") {
    document.documentElement.classList.add('dark-theme');
  }
  return (
    <main className="bg-primary text-base h-screen">
      <button onClick={handelClick}>switch</button>
      <br></br>
      React ⚛️ + Vite ⚡ + Replit 🌀
    </main>
  )
}
