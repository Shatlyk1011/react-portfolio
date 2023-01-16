import "./btn.scss";

export default function btn({ title, logo, padding, url }) {
  return (
    <a
      target="_blank"
      href={url}
      className={`btn btn-main ${padding}`}
      rel="noreferrer" // old browsers?
    >
      <span>{logo}</span> {title}
    </a>
  );
}
