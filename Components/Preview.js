'use client'

import "@/Styles/page.css";

export const Preview = (props) => {
  return (
    <div className="preview-container">
      <h2 className="preview-title">{props.title}</h2>
      <a href={props.src} target="_blank">
        <img className="preview-img" src={props.src} />
      </a>
      <ul>
      {props.tags.map((tag) => (
        <li key={tag.ID}><span className="preview-tag">{tag}</span></li>
      ))}
      </ul>
      <div className="close-btn" onClick={() => { props.show(false) }}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
