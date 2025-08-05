function Loader() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "80px",
          aspectRatio: "0.75",
          background:
            "no-repeat linear-gradient(#FF4F5B 0 0) 0% 100%, no-repeat linear-gradient(#FF4F5B 0 0) 50% 100%, no-repeat linear-gradient(#FF4F5B 0 0) 100% 100%",
          backgroundSize: "20% 65%",
          animation: "b8 1s infinite linear",
        }}
      />
      <h2
        style={{
          fontWeight: 600,
          fontSize: "1.4rem",
          margin: 0,
        }}
      >
        Please, wait for a minute.
      </h2>

      <style>{`
        @keyframes b8 {
          16.67% { background-position: 0% 0%, 50% 100%, 100% 100% }
          33.33% { background-position: 0% 0%, 50% 0%, 100% 100% }
          50%    { background-position: 0% 0%, 50% 0%, 100% 0% }
          66.67% { background-position: 0% 100%, 50% 0%, 100% 0% }
          83.33% { background-position: 0% 100%, 50% 100%, 100% 0% }
        }
      `}</style>
    </div>
  );
}

export default Loader;
