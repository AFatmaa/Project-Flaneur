function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl">
        <figure>
          <img 
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop" 
            alt="Paris" 
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">
            Project Flaneur
          </h2>
          <p>Your mind's atlas. Ready to capture memories?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Let's Go</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App