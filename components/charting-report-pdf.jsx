export function ChartingReportPDF({ data }) {
  return (
    <div style={{ fontFamily: "serif", fontSize: "12px", lineHeight: "1.6", color: "#000" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "24px", borderBottom: "2px solid #333", paddingBottom: "16px" }}>
        <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>kw-Gis</div>
        <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "4px" }}>
          Kwara State Geographic Information Service
        </div>
        <div style={{ fontSize: "10px", fontWeight: "bold" }}>
          OFFICE OF THE SURVEYOR GENERAL / DIRECTORATE OF SURVEY
        </div>
      </div>

      {/* Reference and Recipient */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ fontSize: "10px", marginBottom: "8px" }}>
          <span style={{ fontWeight: "bold" }}>REF:</span> {data.referenceNumber}
        </div>
        <div style={{ fontSize: "12px", fontWeight: "bold", marginBottom: "8px" }}>{data.recipientName}</div>
        <div style={{ fontSize: "10px", marginBottom: "16px" }}>Dear Sir/Ma</div>
        <div style={{ fontSize: "10px", marginBottom: "16px", textAlign: "right" }}>{data.date}</div>
      </div>

      {/* Title */}
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "12px",
          marginBottom: "24px",
          textDecoration: "underline",
        }}
      >
        CHARTING INFORMATION REPORT
      </div>

      {/* Application Details */}
      <div style={{ marginBottom: "24px" }}>
        <p style={{ fontSize: "10px", marginBottom: "12px" }}>
          With reference to your application on the above subject matter dated {data.applicationDate} with the following
          details.
        </p>

        <table style={{ width: "100%", fontSize: "10px", marginBottom: "16px", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold", padding: "4px 0" }}>Beacon</td>
              <td style={{ padding: "4px 0" }}>{data.beacon}</td>
              <td style={{ fontWeight: "bold", padding: "4px 0 4px 16px" }}>U.T.M</td>
              <td style={{ padding: "4px 0" }}>{data.beaconE}mE</td>
              <td style={{ padding: "4px 0" }}>{data.beaconN}mN</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: "4px 0" }}>TOWNSHIP</td>
              <td style={{ padding: "4px 0" }}>{data.townshipE}mE</td>
              <td style={{ padding: "4px 0" }}>{data.townshipN}mN</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: "4px 0" }}>Location</td>
              <td colSpan={4} style={{ padding: "4px 0" }}>
                At {data.area}, {data.irepodun} {data.lga} {data.state}
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: "4px 0" }}>Size</td>
              <td style={{ padding: "4px 0" }}>{data.size} Hectares</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", padding: "4px 0" }}>Surveyor</td>
              <td style={{ padding: "4px 0" }}>{data.surveyor}</td>
              <td style={{ fontWeight: "bold", padding: "4px 0 4px 16px" }}>Date Signed</td>
              <td colSpan={2} style={{ padding: "4px 0" }}>
                {data.dateSigned}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Status Report */}
      <div style={{ marginBottom: "24px" }}>
        <p style={{ fontSize: "10px", marginBottom: "16px", fontWeight: "600" }}>
          The said plan has been Charted and reported as follows
        </p>

        <table style={{ width: "100%", fontSize: "10px", border: "1px solid #000", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #000" }}>
              <th style={{ borderRight: "1px solid #000", padding: "8px", textAlign: "left", fontWeight: "bold" }}>
                S/N
              </th>
              <th style={{ borderRight: "1px solid #000", padding: "8px", textAlign: "left", fontWeight: "bold" }}>
                DESCRIPTION
              </th>
              <th style={{ borderRight: "1px solid #000", padding: "8px", textAlign: "left", fontWeight: "bold" }}>
                Status
              </th>
              <th style={{ padding: "8px", textAlign: "left", fontWeight: "bold" }}>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #000" }}>
              <td style={{ borderRight: "1px solid #000", padding: "8px" }}>1</td>
              <td style={{ borderRight: "1px solid #000", padding: "8px" }}>
                Land falls within Government Acquisition
              </td>
              <td style={{ borderRight: "1px solid #000", padding: "8px", fontWeight: "bold" }}>
                {data.landAcquisition}
              </td>
              <td style={{ padding: "8px" }}>{data.landAcquisitionRemarks}</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #000" }}>
              <td style={{ borderRight: "1px solid #000", padding: "8px" }}>2</td>
              <td style={{ borderRight: "1px solid #000", padding: "8px" }}>Land falls within Existing Title</td>
              <td style={{ borderRight: "1px solid #000", padding: "8px", fontWeight: "bold" }}>
                {data.existingTitle}
              </td>
              <td style={{ padding: "8px" }}>{data.existingTitleRemarks}</td>
            </tr>
            <tr>
              <td style={{ borderRight: "1px solid #000", padding: "8px" }}>3</td>
              <td style={{ borderRight: "1px solid #000", padding: "8px" }}>The Land is FREE from any Acquisition</td>
              <td style={{ borderRight: "1px solid #000", padding: "8px", fontWeight: "bold" }}>
                {data.freeFromAcquisition}
              </td>
              <td style={{ padding: "8px" }}>{data.freeAcquisitionRemarks}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Notes */}
      <div style={{ marginTop: "32px", fontSize: "10px" }}>
        <p style={{ marginBottom: "16px" }}>
          To advance your Certificate of Occupancy (CofO) application, you must provide a Lodgment Certificate. Please
          arrange for your Surveyor to submit the Record Copy to obtain this required document.
        </p>

        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Note:</p>
          <ol style={{ listStyleType: "decimal", marginLeft: "16px", lineHeight: "1.8" }}>
            <li>This Information Report does not confer Title on this Land.</li>
            <li>This information is in order, provided the quoted coordinates on the survey plan are correct</li>
            <li>This Information can only be used for processing of Title in the name of the addressee</li>
            <li>Any Alteration, cancellation, Forgery or Erasure on this report render it null and void</li>
            <li>Please ensure that the proposed development plan complies with Local/State/Federal Building.</li>
          </ol>
        </div>

        {/* Contact Information */}
        <div style={{ borderTop: "1px solid #ccc", paddingTop: "16px" }}>
          <p style={{ fontWeight: "bold" }}>Commissioner's Lodge Way, GRA</p>
          <p>PMB 1425, Ilorin, Kwara State.</p>
          <p>KWGIS@Kwarastate.gov.ng</p>
          <p>09035551892</p>
        </div>
      </div>
    </div>
  )
}
