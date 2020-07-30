import React from 'react';

export default class AddTaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="d-flex justify-content-center">
        <div className="card task-modal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti. Sagittis vitae et leo duis. Risus feugiat in ante metus dictum at tempor commodo. Massa vitae tortor condimentum lacinia quis vel eros donec. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Cursus metus aliquam eleifend mi in nulla posuere. Odio morbi quis commodo odio. Aliquam etiam erat velit scelerisque in dictum. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Amet tellus cras adipiscing enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit ut tortor pretium viverra suspendisse potenti. Sagittis vitae et leo duis. Risus feugiat in ante metus dictum at tempor commodo. Massa vitae tortor condimentum lacinia quis vel eros donec. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Cursus metus aliquam eleifend mi in nulla posuere. Odio morbi quis commodo odio. Aliquam etiam erat velit scelerisque in dictum. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Amet tellus cras adipiscing enim.
          <div>
            <button
              className="btn btn-primary"
              onClick={ this.props.onClick }
            >
              Done
            </button>
          </div>
        </div>
      </div>
    )
  }
}
