import("./PlanCard.css");

export const PlanCard = () => {
  const data = {
    insurerName: "Exide Life Insurance",
    img: "http://static.pbcdn.in/term-cdn/images/images/insurer/exide_logo.png",
    type: "Smart Term Edge Classic",
    lifeCover: "4.6 Cr",
    survivalBenefit: "11.01 Lac",
    coverage: "28 Yrs",
    maxLimit: "71 Yrs",
    claimsSettled: "99.8%",
    monthly: "₹11,697",
    yearly: "₹1,33,681",
    medicalSupport: "Physical Medical",
    claimSettlementTime: "24 hrs",
  };

  return (
    <>
      <div className="card">
        <div>
          <img src={data.img} alt={data.insurerName} className="insurerLogo" />
          <p>{data.type}</p>

          <div className="planDetails">PlanDetails {">"}</div>

          <div className="claimSettlement">
            <img
              src="https://termlife.policybazaar.com/assets/images/fast-delivery.svg"
              alt="fast delivery"
              style={{ margin: "0px 3px", marginBottom: "1px" }}
            />
            <p>{data.claimsSettled} Claim Settlement</p>
          </div>
        </div>

        <div className="lifeCover">
          <h6>{data.lifeCover}</h6>
          <p>
            Survival Benefit{" "}
            <b style={{ color: "black" }}>{data.survivalBenefit}</b>
          </p>
        </div>

        <div className="coverDuration">
          <h6>{data.coverage}</h6>
          <p>Max Limit: {data.maxLimit}</p>
        </div>

        <div>
          <h6>{data.claimsSettled}</h6>
        </div>

        <div className="price">
          <div className="priceBtn">
            <h4>{data.monthly}</h4>
            <div>
              <img
                src="https://img.icons8.com/ios-glyphs/18/ffffff/chevron-right.png"
                alt="Right Arrow"
              />
            </div>
          </div>

          <p>
            Includes Extra 5% OFF for 1st year <br /> (Exclusively for Salaried
            Customers)
          </p>
        </div>

        <div className="medicalIns">
          <img
            src="https://termlife.policybazaar.com/assets/images/Physical_medi.svg"
            alt="Medical Insurance"
            style={{ width: "14px", margin: "0px 5px", padding: "0px" }}
          />
          <div>{data.medicalSupport}</div>
        </div>
      </div>
    </>
  );
};