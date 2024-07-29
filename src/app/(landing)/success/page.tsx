export default function SuccessPage(){
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
              Thank you for your purchase.
            </div>
            <div>We hope you enjoy your product!</div>
          </div>
        </div>
      );
}