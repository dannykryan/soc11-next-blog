import Link from "next/link"

export default function AboutPage() {
    return (
        <>
      <h1>Hi, I'm John Doe</h1>
      <div className="profileContainer">
        <div
          className="profileImage"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1558730234-d8b2281b0d00?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2UlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "200px",
            height: "200px",
            borderRadius: "50%", // This maintains a 1:1 aspect ratio for a square container
          }}
        />
      </div>
      <p className="profileText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
        justo a justo consequat, in varius nisl consectetur. Proin ac metus
        libero. Nullam vel tortor risus. Vivamus congue, justo ut varius
        aliquet, turpis odio consectetur dolor, at posuere velit purus non orci.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Vestibulum non ligula vitae ligula facilisis bibendum nec
        vel tortor. Quisque auctor, sem non sodales tempus, justo massa vehicula
        urna, non eleifend quam nisl non orci. Aliquam erat volutpat.
        <br />
      </p>
    </>
    )
}