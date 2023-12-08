// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {clickedList: []}

  addClick = id => {
    this.setState(prevState => ({clickedList: [...prevState.clickedList, id]}))
  }

  removeClick = id => {
    this.setState(prevState => ({
      clickedList: prevState.clickedList.filter(each => each !== id),
    }))
  }

  render() {
    const {clickedList} = this.state
    const {faqsList} = this.props
    return (
      <div className="the-cont">
        <div className="card">
          <h1>FAQs</h1>

          <ul>
            {faqsList.map(each => (
              <FaqItem
                details={each}
                key={each.id}
                addClick={this.addClick}
                removeClick={this.removeClick}
                clickedList={clickedList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
