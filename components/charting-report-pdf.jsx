export function ChartingReportPDF({ data }) {
  return (
    <div className="font-serif text-sm leading-relaxed">
      {/* Header */}
      <div className="text-center mb-6 border-b-2 border-gray-300 pb-4">
        <div className="text-lg font-bold mb-2">kw-Gis</div>
        <div className="text-sm font-bold mb-1">Kwara State Geographic Information Service</div>
        <div className="text-xs font-bold">OFFICE OF THE SURVEYOR GENERAL / DIRECTORATE OF SURVEY</div>
      </div>

      {/* Reference and Recipient */}
      <div className="mb-4">
        <div className="text-xs mb-2">
          <span className="font-bold">REF:</span> {data.referenceNumber}
        </div>
        <div className="text-sm font-bold mb-2">{data.recipientName}</div>
        <div className="text-xs mb-4">Dear Sir/Ma</div>
        <div className="text-xs mb-4 text-right">{data.date}</div>
      </div>

      {/* Title */}
      <div className="text-center font-bold text-sm mb-6 underline">CHARTING INFORMATION REPORT</div>

      {/* Application Details */}
      <div className="mb-6">
        <p className="text-xs mb-3">
          With reference to your application on the above subject matter dated {data.applicationDate} with the following
          details.
        </p>

        <table className="w-full text-xs mb-4">
          <tbody>
            <tr>
              <td className="font-bold py-1">Beacon</td>
              <td className="py-1">{data.beacon}</td>
              <td className="font-bold py-1 pl-4">U.T.M</td>
              <td className="py-1">{data.beaconE}mE</td>
              <td className="py-1">{data.beaconN}mN</td>
            </tr>
            <tr>
              <td className="font-bold py-1">TOWNSHIP</td>
              <td className="py-1">{data.townshipE}mE</td>
              <td className="py-1">{data.townshipN}mN</td>
            </tr>
            <tr>
              <td className="font-bold py-1">Location</td>
              <td colSpan={4} className="py-1">
                At {data.area}, {data.irepodun} {data.lga} {data.state}
              </td>
            </tr>
            <tr>
              <td className="font-bold py-1">Size</td>
              <td className="py-1">{data.size} Hectares</td>
            </tr>
            <tr>
              <td className="font-bold py-1">Surveyor</td>
              <td className="py-1">{data.surveyor}</td>
              <td className="font-bold py-1 pl-4">Date Signed</td>
              <td colSpan={2} className="py-1">
                {data.dateSigned}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Status Report */}
      <div className="mb-6">
        <p className="text-xs mb-4 font-semibold">The said plan has been Charted and reported as follows</p>

        <table className="w-full text-xs border border-gray-400">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="border-r border-gray-400 p-2 text-left font-bold">S/N</th>
              <th className="border-r border-gray-400 p-2 text-left font-bold">DESCRIPTION</th>
              <th className="border-r border-gray-400 p-2 text-left font-bold">Status</th>
              <th className="p-2 text-left font-bold">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-400">
              <td className="border-r border-gray-400 p-2">1</td>
              <td className="border-r border-gray-400 p-2">Land falls within Government Acquisition</td>
              <td className="border-r border-gray-400 p-2 font-bold">{data.landAcquisition}</td>
              <td className="p-2">{data.landAcquisitionRemarks}</td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="border-r border-gray-400 p-2">2</td>
              <td className="border-r border-gray-400 p-2">Land falls within Existing Title</td>
              <td className="border-r border-gray-400 p-2 font-bold">{data.existingTitle}</td>
              <td className="p-2">{data.existingTitleRemarks}</td>
            </tr>
            <tr>
              <td className="border-r border-gray-400 p-2">3</td>
              <td className="border-r border-gray-400 p-2">The Land is FREE from any Acquisition</td>
              <td className="border-r border-gray-400 p-2 font-bold">{data.freeFromAcquisition}</td>
              <td className="p-2">{data.freeAcquisitionRemarks}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Notes */}
      <div className="mt-8 text-xs">
        <p className="mb-4">
          To advance your Certificate of Occupancy (CofO) application, you must provide a Lodgment Certificate. Please
          arrange for your Surveyor to submit the Record Copy to obtain this required document.
        </p>

        <div className="mb-6">
          <p className="font-bold mb-2">Note:</p>
          <ol className="list-decimal list-inside space-y-1 text-xs ml-2">
            <li>This Information Report does not confer Title on this Land.</li>
            <li>This information is in order, provided the quoted coordinates on the survey plan are correct</li>
            <li>This Information can only be used for processing of Title in the name of the addressee</li>
            <li>Any Alteration, cancellation, Forgery or Erasure on this report render it null and void</li>
            <li>Please ensure that the proposed development plan complies with Local/State/Federal Building.</li>
          </ol>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-300 pt-4">
          <p className="font-bold">Commissioner's Lodge Way, GRA</p>
          <p>PMB 1425, Ilorin, Kwara State.</p>
          <p>📧 KWGIS@Kwarastate.gov.ng</p>
          <p>📞 09035551892</p>
        </div>
      </div>
    </div>
  )
}
