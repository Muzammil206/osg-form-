"use client"

import { useState } from "react"
import { ChartingForm } from "@/components/charting-form"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [formData, setFormData] = useState({
    recipientName: "",
    date: "",
    referenceNumber: "",
    surveyPlanNumber: "",
    applicationDate: "",
    beacon: "",
    beaconE: "",
    beaconN: "",
    townshipE: "",
    townshipN: "",
    area: "",
    irepodun: "",
    lga: "",
    state: "",
    size: "",
    surveyor: "",
    dateSigned: "",
    landAcquisition: "",
    existingTitle: "",
    freeFromAcquisition: "",
    landAcquisitionRemarks: "",
    existingTitleRemarks: "",
    freeAcquisitionRemarks: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleDownloadPDF = async () => {
    try {
      setIsLoading(true)
      const { jsPDF } = await import("jspdf")

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const pageWidth = pdf.internal.pageSize.getWidth()
      let yPosition = 15

      // Header Section
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(14)
      pdf.text("kw-Gis", pageWidth / 2, yPosition, { align: "center" })
      yPosition += 6

      pdf.setFontSize(11)
      pdf.text("Kwara State Geographic Information Service", pageWidth / 2, yPosition, { align: "center" })
      yPosition += 5

      pdf.setFontSize(9)
      pdf.text("OFFICE OF THE SURVEYOR GENERAL / DIRECTORATE OF SURVEY", pageWidth / 2, yPosition, { align: "center" })
      yPosition += 10

      // Reference and Recipient Info
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(9)
      pdf.text(`REF: ${formData.referenceNumber}`, 15, yPosition)
      yPosition += 6

      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(10)
      pdf.text(formData.recipientName, 15, yPosition)
      yPosition += 6

      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(9)
      pdf.text("Dear Sir/Ma", 15, yPosition)
      yPosition += 8

      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(9)
      pdf.text(formData.date, pageWidth - 15, yPosition, { align: "right" })
      yPosition += 12

      // Title
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(11)
      pdf.text("CHARTING INFORMATION REPORT", pageWidth / 2, yPosition, { align: "center" })
      yPosition += 10

      // Application Details Text
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(9)
      const surveyText = `With reference to your application on the above subject matter dated ${formData.applicationDate} with the following details.`
      const splitText = pdf.splitTextToSize(surveyText, pageWidth - 30)
      pdf.text(splitText, 15, yPosition)
      yPosition += splitText.length * 4 + 5

      // Details Table
      const detailsData = [
        ["Beacon", formData.beacon, "U.T.M", `${formData.beaconE}mE`, `${formData.beaconN}mN`],
        ["TOWNSHIP", `${formData.townshipE}mE`, `${formData.townshipN}mN`, "", ""],
        ["Location", `At ${formData.area}, ${formData.irepodun} ${formData.lga} ${formData.state}`, "", "", ""],
        ["Size", `${formData.size} Hectares`, "", "", ""],
        ["Surveyor", formData.surveyor, "Date Signed", formData.dateSigned, ""],
      ]

      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(8)
      detailsData.forEach((row) => {
        let xPos = 15
        row.forEach((cell, idx) => {
          if (cell) {
            if (idx === 0 || idx === 2) {
              pdf.setFont("helvetica", "bold")
            } else {
              pdf.setFont("helvetica", "normal")
            }
            pdf.text(cell, xPos, yPosition)
          }
          xPos += idx === 0 ? 25 : idx === 2 ? 30 : 25
        })
        yPosition += 5
      })

      yPosition += 8

      // Status Report Section
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(9)
      pdf.text("The said plan has been Charted and reported as follows", 15, yPosition)
      yPosition += 8

      // Status Table
      const statusTableData = [
        [
          { content: "S/N", styles: { fontStyle: "bold", halign: "center", fillColor: [220, 220, 220] } },
          { content: "DESCRIPTION", styles: { fontStyle: "bold", halign: "left", fillColor: [220, 220, 220] } },
          { content: "Status", styles: { fontStyle: "bold", halign: "center", fillColor: [220, 220, 220] } },
          { content: "Remarks", styles: { fontStyle: "bold", halign: "left", fillColor: [220, 220, 220] } },
        ],
        ["1", "Land falls within Government Acquisition", formData.landAcquisition, formData.landAcquisitionRemarks],
        ["2", "Land falls within Existing Title", formData.existingTitle, formData.existingTitleRemarks],
        ["3", "The Land is FREE from any Acquisition", formData.freeFromAcquisition, formData.freeAcquisitionRemarks],
      ]

      const pageHeight = pdf.internal.pageSize.getHeight()
      const bottomMargin = 30

      pdf.setFontSize(8)
      pdf.setTextColor(0, 0, 0)

      // Manual table drawing with borders
      const tableStartY = yPosition
      const colWidths = [15, 80, 30, 40]
      const rowHeight = 7

      // Draw table header
      pdf.setFillColor(220, 220, 220)
      pdf.setFont("helvetica", "bold")
      pdf.rect(15, tableStartY, 165, rowHeight, "F")
      pdf.text("S/N", 17, tableStartY + 4)
      pdf.text("DESCRIPTION", 35, tableStartY + 4)
      pdf.text("Status", 120, tableStartY + 4)
      pdf.text("Remarks", 155, tableStartY + 4)

      pdf.setDrawColor(0, 0, 0)
      pdf.setLineWidth(0.5)
      pdf.rect(15, tableStartY, 165, rowHeight)
      pdf.line(30, tableStartY, 30, tableStartY + rowHeight)
      pdf.line(115, tableStartY, 115, tableStartY + rowHeight)
      pdf.line(150, tableStartY, 150, tableStartY + rowHeight)

      yPosition = tableStartY + rowHeight

      // Draw table rows
      pdf.setFont("helvetica", "normal")
      const tableRows = [
        ["1", "Land falls within Government Acquisition", formData.landAcquisition, formData.landAcquisitionRemarks],
        ["2", "Land falls within Existing Title", formData.existingTitle, formData.existingTitleRemarks],
        ["3", "The Land is FREE from any Acquisition", formData.freeFromAcquisition, formData.freeAcquisitionRemarks],
      ]

      tableRows.forEach((row) => {
        pdf.rect(15, yPosition, 165, rowHeight)
        pdf.line(30, yPosition, 30, yPosition + rowHeight)
        pdf.line(115, yPosition, 115, yPosition + rowHeight)
        pdf.line(150, yPosition, 150, yPosition + rowHeight)

        pdf.text(row[0], 17, yPosition + 4)
        const descLines = pdf.splitTextToSize(row[1], 80)
        pdf.text(descLines[0], 35, yPosition + 4)
        pdf.setFont("helvetica", "bold")
        pdf.text(row[2], 120, yPosition + 4)
        pdf.setFont("helvetica", "normal")
        const remarksLines = pdf.splitTextToSize(row[3] || "", 35)
        pdf.text(remarksLines[0] || "", 155, yPosition + 4)

        yPosition += rowHeight
      })

      yPosition += 8

      // Footer Notes
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(8)
      const footerText =
        "To advance your Certificate of Occupancy (CofO) application, you must provide a Lodgment Certificate. Please arrange for your Surveyor to submit the Record Copy to obtain this required document."
      const footerLines = pdf.splitTextToSize(footerText, pageWidth - 30)
      pdf.text(footerLines, 15, yPosition)
      yPosition += footerLines.length * 3 + 4

      pdf.setFont("helvetica", "bold")
      pdf.text("Note:", 15, yPosition)
      yPosition += 4

      pdf.setFont("helvetica", "normal")
      const notes = [
        "i.  This Information Report does not confer Title on this Land.",
        "ii. This information is in order, provided the quoted coordinates on the survey plan are correct",
        "iii. This Information can only be used for processing of Title in the name of the addressee",
        "iv. Any Alteration, cancellation, Forgery or Erasure on this report render it null and void",
        "v.  Please ensure that the proposed development plan complies with Local/State/Federal Building.",
      ]

      notes.forEach((note) => {
        const noteLines = pdf.splitTextToSize(note, pageWidth - 30)
        pdf.text(noteLines, 15, yPosition)
        yPosition += noteLines.length * 3 + 1
      })

      yPosition += 4

      // Contact Information
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(8)
      pdf.text("Commissioner's Lodge Way, GRA", 15, yPosition)
      yPosition += 4
      pdf.setFont("helvetica", "normal")
      pdf.text("PMB 1425, Ilorin, Kwara State.", 15, yPosition)
      yPosition += 4
      pdf.text("KWGIS@Kwarastate.gov.ng", 15, yPosition)
      yPosition += 4
      pdf.text("09035551892", 15, yPosition)

      // Generate filename with recipient name
      const sanitizedName = formData.recipientName.replace(/\s+/g, "-").toUpperCase()
      const filename = `${sanitizedName}-Charting-Report.pdf`

      pdf.save(filename)
      console.log(`[v0] PDF downloaded: ${filename}`)
    } catch (error) {
      console.error("[v0] PDF generation error:", error)
      alert("Error generating PDF. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-3">Report Generator</h1>
          <p className="text-lg text-blue-700">Fill in the form below to generate your PDF report</p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Report Details</h2>
            <ChartingForm data={formData} onChange={setFormData} />
            <Button
              onClick={handleDownloadPDF}
              disabled={isLoading}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-4 rounded-lg text-lg transition-colors duration-200"
              size="lg"
            >
              {isLoading ? "Generating PDF..." : "Download PDF"}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
