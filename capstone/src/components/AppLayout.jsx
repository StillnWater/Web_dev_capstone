import Navigation from './Navigation.jsx'

function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <Navigation />
      <main className="app-content">
        {children}
      </main>
    </div>
  )
}

export default AppLayout