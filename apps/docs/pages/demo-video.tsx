export default function DemoVideo() {
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '64.67065868263472%',
        height: 0,
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
      <iframe
        src="https://www.loom.com/embed/63b4aa82f8394ad0a8783f850152d3b6?sid=4c17bb9f-534d-49c0-92b0-ff182604323e"
        frameBorder="0"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
