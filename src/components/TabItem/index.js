import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTabItem} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabButton = () => onClickTabItem(tabId)

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
