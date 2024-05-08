interface CardSection {
  title: string;
  children: React.ReactNode;
}

export const CardSection = ({ title, children }: CardSection) => {
  return (
    <div
      style={{
        padding: "24px 24px",
        width: "100%",
        backgroundColor: "#E6E6E680",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "700",
          color: "#121212",
        }}
      >
        {title}
      </h1>
      <div>{children}</div>
    </div>
  );
};
