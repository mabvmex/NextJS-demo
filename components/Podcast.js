export const Podcast = ({episode}) => {
  return (
    <iframe
    src={`http://open.spotify.com/embed/episode/${episode}`}
    width="100%"
    height="232"
    frameBorder="0"
    allowtransparency="true"
    allow="encripted-media"
    ></iframe>
  )
}