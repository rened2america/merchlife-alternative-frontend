export default function CancelPage(){
    return (
        <div
          style={{
            display: "grid",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "300px",
              display: "grid",
              alignItems: "start",
              justifyItems: "center",
              gridTemplateRows: "100px 40px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                marginTop: "32px",
              }}
            >
              Your purchase has been canceled.
            </div>
            <div
              style={{
                textAlign: "center",
              }}
            >
              If you have any questions or need further assistance, please don't
              hesitate to contact us.
            </div>
          </div>
        </div>
      );
}