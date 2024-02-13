import '../assets/style/index.css'

function IsLoading() {
  return (
    <div className="card" style={{fontFamily:'Poppins, sans-serif'}}>
        <div className="loader"></div>
        <p>Loading...</p>
    </div>
  )
}

export default IsLoading