import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppProvider } from './provider/app-provider'
import { useUserQuery } from './provider/useUserQuery';

function Home() {
  const { data: user, isLoading } = useUserQuery();
  console.log("🚀 ~ Home ~ isLoading:", isLoading)
  console.log("🚀 ~ Home ~ user:", user)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <div>User not found</div>
  }
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>User</h1>
      <div className="card">
        <p>
          {`Name: ${user.name}`}
        </p>
    </div>
  </>
)
}

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  )
}
