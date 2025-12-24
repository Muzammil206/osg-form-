"use client"

import { useState } from "react"
import { ChartingForm } from "@/components/charting-form"
import { ChartingReportPDF } from "@/components/charting-report-pdf"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [formData, setFormData] = useState({
    recipientName: "ODEJOBI FAMILY",
    date: "24TH NOVEMBER, 2025",
    referenceNumber: "KWGIS/OSG/539/R2293",
    surveyPlanNumber: "KW/1289/030/2021",
    applicationDate: "24TH September, 2025",
    beacon: "SC/KW.G96141",
    beaconE: "695060.168",
    beaconN: "912149.252",
    townshipE: "10968.269",
    townshipN: "15486.737",
    area: "Kango Area",
    irepodun: "Ajase-Ipo",
    lga: "Irepodun LGA",
    state: "Kwara State",
    size: "81.118",
    surveyor: "Surv. A. O. Oyetoke",
    dateSigned: "22/09/2025",
    landAcquisition: "NO",
    existingTitle: "NO",
    freeFromAcquisition: "YES",
    landAcquisitionRemarks: "",
    existingTitleRemarks: "",
    freeAcquisitionRemarks: "",
  })

  const handleDownloadPDF = async () => {
    const element = document.getElementById("pdf-content")
    if (!element) return

    const html2pdf = (await import("html2pdf.js")).default

    const opt = {
      margin: 10,
      filename: `Charting-Report-${formData.referenceNumber}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
    }

    html2pdf().set(opt).from(element).save()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Charting Information Report Generator</h1>
          <p className="text-gray-600">Fill in the form to generate and download your PDF report</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Report Details</h2>
            <ChartingForm data={formData} onChange={setFormData} />
          </div>

          {/* PDF Preview Section */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold">PDF Preview</h2>
              </div>
              <div id="pdf-content" className="p-8 bg-white text-black" style={{ minHeight: "600px" }}>
                <ChartingReportPDF data={formData} />
              </div>
            </div>

            <Button
              onClick={handleDownloadPDF}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
              size="lg"
            >
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
