interface HeaderInterface {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderInterface) => {
  return (
    <header
      style={{
        height: "400px",
        width: "100%",
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1f 1fr",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "68px",
            fontWeight: "700",
          }}
        >
          {title}
        </h1>
        <h3>{subtitle}</h3>
      </div>
    </header>
  );
};
