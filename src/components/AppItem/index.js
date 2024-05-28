import './index.css'

const AppItem = props => {
  const {appName, imageUrl} = props
  return (
    <div className="app-item">
      <img src={imageUrl} className="app-image" />
      <h1 className="app-name">{appName}</h1>
    </div>
  )
}

export default AppItem
