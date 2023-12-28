import Link from "next/link";

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
      <div className="profileText">
        <p>
          Hey coding enthusiasts! I&apos;m John, a passionate developer, and the mind
          behind this blog where I unravel the mysteries of code.
        </p>
        <p>
          From the early days of &quot;Hello World&quot; to the intricate dance of
          algorithms, I find joy in crafting elegant solutions to complex
          problems.
        </p>
        <p>
          Why this blog? I believe knowledge grows when shared. I aim to create
          a space where developers of all levels can find inspiration, guidance,
          and maybe even a bit of humor in the fascinating realm of coding.
        </p>
        <p>
          Expect a diverse range of topics - from the latest programming
          languages to my coding escapades. But it&apos;s not just about the code;
          it&apos;s about the community, shared experiences, and collective knowledge
          propelling us forward.
        </p>
        <p>
          Join the conversation, ask questions, and share your insights. Let&apos;s
          navigate the vast sea of binary together, embracing the highs and lows
          that come with deciphering the language of machines.
        </p>
        <p>
          Welcome to John&apos;s Coding Chronicles - your home for all things code!
        </p>
        <p>Happy coding!</p>
        <p>John</p>
      </div>
    </>
  );
}
