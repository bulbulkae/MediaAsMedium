function Detail() {
  return (
    <div className="details" id="details">
      <div className="top">
        <div className="left">
          <div className="ava-img-div">
            <img
              alt="ava-img"
              className="ava-img"
              // src={el.multimedia[2].url}
            />
          </div>
          <div className="info-details">
            <div className="authornamedetails">{/* {el.byline} */}</div>
            <div className="info-top">
              <div className="date">{/* {formattedDate} */}</div>
              <span className="delimeter">•</span>
              <div>12 min read</div>
              <span className="delimeter">•</span>
              <div>Member-only</div>
            </div>
          </div>
        </div>

        <div className="right">
          <img
            alt="linkedin"
            src="https://s3-alpha-sig.figma.com/img/0b04/ff6d/ec82af9e1bf9093e8f16bbfa4bace861?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M4or67SS0uADbtkq6GW-WbtPqNdxfcSS5gzuA5qP9ulVAHT-BXbVXeLQ6H-ftnKvyQlLAG6wEjhWATB4Y1O2pE81WKEQHFx9Ccks91docEH4miMRS3GKKBS8RTT8xSNFzsn86RJdqQExb7DlDWFlY1TDcRPFHkvll~VT0L~SSgqO~8s0sMdlKvMYn5PtTZuTJxeMVHNU2SjCE9pr3r8GJCimwyAjCLi7d6LMyyduHQ29OFQ1bktpDlfg-dEeiFKJJ1FP2WT6-v811PZDLEm2aXNQHjFkRQnJ1GfycEQbZX~dfhHwE-zqenRXAZDSrCe2i43PT0WO0T4YX1cwer7y9A__"
          />
          <img
            alt="facebook"
            src="https://s3-alpha-sig.figma.com/img/c6bf/3afe/c6227bfcfc21ea90afcee5ab577208bf?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jtylembPUkKNNFfifEdLwJGRfdHn~vjwvnZic-QRs5hmUxu7-sLjM95nn7qlFP~VlhbVl7tjihuQLuVOUnFvq~htq26rKy3FJH63HNzc-DIgq2gU7hZjAByGTXgb4HdKQsLzmXu~~oa4LWTtsAG-A0hQF2IYhZ527xWRdhoNciy3wZSENDLYe1mU~QSaQqgD9hS8mxf~JDA4Wwp0OA1e3xMAc61LDGW6OYWTwHo69W8YpUwp88eHnxbRXfw3ZRTD0c54nuW0gawune0LPDie-Tg-iHQOHueo4JqPe2fWNENIWHm6aZOP-kybjkw6VPC5rtJi6fq9Hybt4sRnWGheFg__"
          />
          <img
            alt="twitter"
            src="https://s3-alpha-sig.figma.com/img/fa44/fde6/a07f665d9c047a50ca469c5736f31d5a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeQnaDtqAmZ2QLUBMO7y8cxxoVJslV2f6xkOqAE07MkpQMqSLu1OhL0IZ8v~BheSj-ZqHK0Rv21JPHMM1ghvDhFCxvaPkqFm6aTIJtGYOd1De-CbInrZglHXsoLsTuoKJuwXLdGf88iBxZ9QeCJTfbmbJLh5zZLHCweoB574jzbFeKyMo4d9SYt98CEYHnYDxQ-dSDLGtZGIrajO~kyOF8j36DXOp6u8YgNxKGZoQnM1cEzYLIo6l~dGF4QqRaiWqhI9O69XU2DHnRcGbBc2NZuNZFQzE5F~GpUqDcI4i5UgzPkflUXyrZpSFvI85H4fojYV8kSSYHl1xRDmoRqbvw__"
          />
        </div>
      </div>

      <div className="text-dt">
        <p className="title-details inter">{/* {el.title} */}</p>
        <p className="description-details inter">{/* {el.abstract} */}</p>
      </div>

      <div className="content-img-div">
        <img
          className="content-img"
          alt="content-img"
          //   src= {el.multimedia[0].url}
        />
      </div>

      <div className="content-text-div">
        <p className="subheader inter">{/* {el.subsection || 'Subsection'} */}</p>
        <p className="content-text inter">
          How long are you awake in the morning before you go online? Perhaps it’s while you’re
          still lying in bed, using a news feed or social media as the needed stimulant to push you
          out from under the covers...
        </p>
      </div>

      <div className="infobuttom-details">
        <div className="actions-left">
          <div className="div">
            <img
              alt="likes"
              src="https://s3-alpha-sig.figma.com/img/f248/6ee0/2d7ec71fc6661cefbb701de36587c5c5?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AXFt4Ntp91XuDZyYwxZRmQfu1~1KLqMr2jqvPm9dyES3iWpZ4sSKDhah02tpfrk0JUXAkre-J4ZUBtI6OEi3qfCemfRAYGpKge5btjEFcXEfxCageRFab0YzJaeJUb1iZ0jiMykK-gm9jmqwm7gs4ihqlQyK848dh5BSBhf9~TD~rPA25h9AtT8C-DN2D7P4nRNiXQ7ySw-pUGphqe~41RSDKLnZtjpH1IacM-3xEH2fN83bTZfawQ~3dHmUqZnZyrCSw3fXabHqVKVi1Ia9Wbg3lRgMOIETXnYlTdHekj0VEWgSnxHTLI6OUw2vB2lNPiqTQKzNEpcEGswjlXJV2w__"
            />
            <p>120</p>
          </div>

          <div className="div">
            <img
              alt="comments"
              src="https://s3-alpha-sig.figma.com/img/df19/5722/59fc6566c4c0ea46db49976f67e25beb?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akQkCQERiX0mWBQdpAfiJ1CK1ClNf6Zmx56NuT39GrDcE2~pne~72lEtkE8AtzjdDVs3jZYuFSS5T88OnTZyKxnjygWS6dMFCOTJSRuLwSaJriVYo5gULE-XNvyR28b-XjsejO8mWV6A6HGy9D56IBkAsaQn60M8xZGGywJ1ZgJU10tLkXvhaWqBlYsOG3w52CLCZ4urJskFuQ8wiCJT8zPPaezpStt8lA9H1L4hQZdqMBYseayAXRJTs07hi7rxIgfFa~ZqmjT8V0zGgoG0MwW-hdPLbbF1x0aOsnNK7y0kxJv4o6vP8MY3D4kBM9bsNnVT6vCxvYUfkEXQjGDDpw__"
            />
            <p>12</p>
          </div>
        </div>
        <div className="actions-right">
          <div className="div">
            <img
              alt="saved"
              src="https://s3-alpha-sig.figma.com/img/427d/d47c/6be75205c37ce9023e8364dbcf18d779?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=haJUT9Hx5xobsvtrJSXr~Prfy-wRWOAdQ3I0sjTHhbcG42VHryZtuHVeI4-cpWmwqD~JUb~9a7CQ-TCtiiMqePVu6jpuzCJ2S82S-jjmENMtUvElVMszdyhoYZjP7WedPf0nR8zYcY5KWIB-Twdt0EhAhcpgMiPoXvptjp4T3hxu6Hq92qmixaQvS1ftGn8qjOMciTUkHmbD8Nnlw~V~0thFIc-LtJc24xHzl5y1SoljJTXjnBbPgo~h3-CjcShDIGRx~WxejMBA7LCCerJW8OUIay0KVRFp2tZGVlbc-6W2YJ0mbXSpvMqFVx-rSAZW1Cjk3wep9ghoGKdsxXcPXw__"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Detail };
