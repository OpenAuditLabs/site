import React from "react";

export default function ReadyToSecure() {
  return (
    <section className="ready-secure-container bg-background ">
      <div className="ready-secure-card ">
        <h2 className="ready-secure-title">Ready to Secure Your Protocol?</h2>
        <p className="ready-secure-desc">
          Join the growing list of protocols that trust OpenTestingLabs with
          their smart contract security.
        </p>
        <div className="ready-secure-actions">
          <button className="ready-secure-btn gradient">
            Start Your Audit
          </button>
          <button className="ready-secure-btn outline">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
