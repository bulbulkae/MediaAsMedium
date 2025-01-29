import '../styles/style.css';

function Item() {
  return (
    <div>
      <div className="newlist" id="newlist">
        <div className="new-item" id="parentDiv">
          <div className="new-item-content">
            <div className="new-item-content-top">
              <div className="top-info">
                <div
                  className="ava-image-container"
                  // style="width: 24px; height: 24px; border-radius: 30px;"
                >
                  <img
                    alt="avatar-img"
                    className="img"
                    // src="${el.multimedia[2].url}"
                  />
                </div>
                <p className="in inter">
                  <span className="authorname">{/* ${el.byline} */} authorname</span> in
                  <span className="topicname">{/* ${el.geo_facet} */} topicname</span>
                </p>
                <p className="date">{/* ${formattedDate} */} date</p>
              </div>
              <div className="text inter">
                <p className="title">{/* ${el.title} */} title</p>
                <p className="description inter">{/* ${el.abstract} */} description</p>
              </div>
            </div>
            <div className="new-item-content-infobuttom">
              <div className="info">
                <button className="btn">{/* ${el.section} */}section</button>
                <p className="inter">12 min read</p>
                <p className="delimeter inter">|</p>
                <p className="inter">Selected for you</p>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img
              alt="ni-image"
              className="img"
              // src="${el.multimedia[0].url}"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Item };
