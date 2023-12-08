import './index.css'

const FaqItem = props => {
  const {details, addClick, removeClick, clickedList} = props
  const {id, questionText, answerText} = details
  const imgUrl = clickedList.includes(id)
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = clickedList.includes(id) ? 'plus' : 'minus'

  const onClicked = () => {
    if (clickedList.includes(id)) {
      removeClick(id)
    } else {
      addClick(id)
    }
  }

  return (
    <li className="card">
      <div className="upper-part">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="btn" onClick={onClicked}>
          <img src={imgUrl} className="image" alt={altText} />
        </button>
      </div>

      {clickedList.includes(id) ? <hr /> : <></>}
      {clickedList.includes(id) ? <p className="anser">{answerText}</p> : <></>}
    </li>
  )
}
export default FaqItem
