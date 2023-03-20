import { Component } from "react";
import PropTypes from "prop-types";

class ShelfCharger extends Component<any, any> {
//   static propTypes = {
//     book: PropTypes.object.isRequired,
//     // books: PropTypes.array.isRequired,
//     // changeShelf: PropTypes.func.isRequired
//   };

  render() {
    // this.getBooks()
    const { book } = this.props;

    return (
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfCharger;
