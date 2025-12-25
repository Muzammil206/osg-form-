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
      const pageHeight = pdf.internal.pageSize.getHeight()
      let yPosition = 12

     

      // Horizontal divider
      pdf.setDrawColor(30, 90, 160)
      pdf.setLineWidth(1)
      pdf.line(15, yPosition, pageWidth - 15, yPosition)
      yPosition += 8

      // Reference and Recipient
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

      // Date on right
      const formattedDate = formData.date
        ? new Date(formData.date)
            .toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            .toUpperCase()
        : ""
      pdf.text(formattedDate, pageWidth - 15, yPosition - 6, { align: "right" })
      yPosition += 6

      // Title
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(11)
      pdf.text(`CHARTING INFORMATION REPORT SURVEY PLAN NUMBER  ${formData.surveyPlanNumber}` , pageWidth / 2, yPosition, { align: "center" })
      yPosition += 10

      
      // Application text
      const appDate = formData.applicationDate
        ? new Date(formData.applicationDate)
            .toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            .toUpperCase()
        : ""
      const surveyText = `With reference to your application on the above subject matter dated ${appDate} with the following details.`
      const splitText = pdf.splitTextToSize(surveyText, pageWidth - 30)
      pdf.text(splitText, 15, yPosition)
      yPosition += splitText.length * 4 + 8

      const tableStartY = yPosition
      const tableX = 15
      const tableWidth = pageWidth - 30
      const rowHeight = 7

      // Column widths
      const col1Width = 40
      const col2Width = 40
      const col3Width = 40
      const col4Width = tableWidth - col1Width - col2Width - col3Width

      // Table header background
      pdf.setFillColor(30, 90, 160)
      pdf.setTextColor(255, 255, 255)
      pdf.rect(tableX, tableStartY, tableWidth, rowHeight, "F")

      // Header text
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(8)
      pdf.text("Type", tableX + 2, tableStartY + 4.5)
      pdf.text("Easting (mE)", tableX + col1Width + 2, tableStartY + 4.5)
      pdf.text("Northing (mN)", tableX + col1Width + col2Width + 2, tableStartY + 4.5)
      pdf.text("Reference", tableX + col1Width + col2Width + col3Width + 2, tableStartY + 4.5)

      // Header borders
      pdf.setDrawColor(0, 0, 0)
      pdf.setLineWidth(0.5)
      pdf.rect(tableX, tableStartY, tableWidth, rowHeight)
      let borderX = tableX + col1Width
      pdf.line(borderX, tableStartY, borderX, tableStartY + rowHeight)
      borderX += col2Width
      pdf.line(borderX, tableStartY, borderX, tableStartY + rowHeight)
      borderX += col3Width
      pdf.line(borderX, tableStartY, borderX, tableStartY + rowHeight)

      yPosition = tableStartY + rowHeight

      // Table data rows
      pdf.setTextColor(0, 0, 0) // All table data text now in black instead of white
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(8)

      const tableRows = [
        ["Beacon", formData.beaconE || "-", formData.beaconN || "-", formData.beacon || "-"],
        ["Township", formData.townshipE || "-", formData.townshipN || "-", "Local"],
      ]

      tableRows.forEach((row, rowIndex) => {
        // Alternate row background
        if (rowIndex % 2 === 0) {
          pdf.setFillColor(240, 245, 250)
          pdf.rect(tableX, yPosition, tableWidth, rowHeight, "F")
        }

        // Row borders
        pdf.setDrawColor(0, 0, 0)
        pdf.rect(tableX, yPosition, tableWidth, rowHeight)
        borderX = tableX + col1Width
        pdf.line(borderX, yPosition, borderX, yPosition + rowHeight)
        borderX += col2Width
        pdf.line(borderX, yPosition, borderX, yPosition + rowHeight)
        borderX += col3Width
        pdf.line(borderX, yPosition, borderX, yPosition + rowHeight)

        // Cell content
        pdf.setFont("helvetica", "bold")
        pdf.text(row[0], tableX + 2, yPosition + 4.5)
        pdf.setFont("helvetica", "normal")
        pdf.text(String(row[1]), tableX + col1Width + 2, yPosition + 4.5)
        pdf.text(String(row[2]), tableX + col1Width + col2Width + 2, yPosition + 4.5)
        pdf.text(String(row[3]), tableX + col1Width + col2Width + col3Width + 2, yPosition + 4.5)

        yPosition += rowHeight
      })

      yPosition += 8

      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(9)
      const locationX = 15
      const valueX = 70

      pdf.text("Location", locationX, yPosition)
      pdf.setFont("helvetica", "normal")
      pdf.text(
        `${formData.area || "-"}, ${formData.irepodun || "-"} ${formData.lga || "-"} ${formData.state || "-"}`,
        valueX,
        yPosition,
      )
      yPosition += 5

      pdf.setFont("helvetica", "bold")
      pdf.text("Size", locationX, yPosition)
      pdf.setFont("helvetica", "normal")
      pdf.text(`${formData.size || "-"} Hectares`, valueX, yPosition)
      yPosition += 5

      pdf.setFont("helvetica", "bold")
      pdf.text("Surveyor", locationX, yPosition)
      pdf.setFont("helvetica", "normal")
      pdf.text(formData.surveyor || "-", valueX, yPosition)
      yPosition += 5

      pdf.setFont("helvetica", "bold")
      pdf.text("Date Signed", locationX, yPosition)
      pdf.setFont("helvetica", "normal")
      const dateSigned = formData.dateSigned
        ? new Date(formData.dateSigned)
            .toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
            .toUpperCase()
        : "-"
      pdf.text(dateSigned, valueX, yPosition)
      yPosition += 10

      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(9)
      pdf.setTextColor(0, 0, 0) // Survey text now in black
      pdf.text("The said plan has been Charted and reported as follows", 15, yPosition)
      yPosition += 8

      const statusTableStartY = yPosition
      const statusRowHeight = 7
      const sn_Width = 12
      const desc_Width = 90
      const status_Width = 30
      const remarks_Width = tableWidth - sn_Width - desc_Width - status_Width

      // Status table header
      pdf.setFillColor(30, 90, 160)
      pdf.setTextColor(255, 255, 255)
      pdf.rect(15, statusTableStartY, tableWidth, statusRowHeight, "F")

      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(8)
      pdf.text("S/N", 16, statusTableStartY + 4)
      pdf.text("DESCRIPTION", 30, statusTableStartY + 4)
      pdf.text("Status", 125, statusTableStartY + 4)
      pdf.text("Remarks", 160, statusTableStartY + 4)

      // Status header borders
      pdf.setDrawColor(0, 0, 0)
      pdf.rect(15, statusTableStartY, tableWidth, statusRowHeight)
      pdf.line(27, statusTableStartY, 27, statusTableStartY + statusRowHeight)
      pdf.line(120, statusTableStartY, 120, statusTableStartY + statusRowHeight)
      pdf.line(150, statusTableStartY, 150, statusTableStartY + statusRowHeight)

      yPosition = statusTableStartY + statusRowHeight

      // Status rows
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(8)
      pdf.setTextColor(0, 0, 0) // Status rows now with black text

      const statusRows = [
        [
          "1",
          "Land falls within Government Acquisition",
          formData.landAcquisition || "-",
          formData.landAcquisitionRemarks || "-",
        ],
        ["2", "Land falls within Existing Title", formData.existingTitle || "-", formData.existingTitleRemarks || "-"],
        [
          "3",
          "The Land is FREE from any Acquisition",
          formData.freeFromAcquisition || "-",
          formData.freeAcquisitionRemarks || "-",
        ],
      ]

      statusRows.forEach((row, rowIndex) => {
        // Alternate backgrounds
        if (rowIndex % 2 === 0) {
          pdf.setFillColor(240, 245, 250)
          pdf.rect(15, yPosition, tableWidth, statusRowHeight, "F")
        }

        // Row borders
        pdf.setDrawColor(0, 0, 0)
        pdf.rect(15, yPosition, tableWidth, statusRowHeight)
        pdf.line(27, yPosition, 27, yPosition + statusRowHeight)
        pdf.line(120, yPosition, 120, yPosition + statusRowHeight)
        pdf.line(150, yPosition, 150, yPosition + statusRowHeight)

        // Cell content
        pdf.text(row[0], 17, yPosition + 4)
        pdf.text(row[1], 32, yPosition + 4)
        pdf.setFont("helvetica", "bold")
        pdf.text(row[2], 122, yPosition + 4)
        pdf.setFont("helvetica", "normal")
        const remarksText = row[3] || "-"
        pdf.text(remarksText.substring(0, 25), 152, yPosition + 4)

        yPosition += statusRowHeight
      })

      yPosition += 8

      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(8)
      pdf.setTextColor(0, 0, 0) // Footer and notes now in black text
      const footerText =
        "To advance your Certificate of Occupancy (CofO) application, you must provide a Lodgment Certificate. Please arrange for your Surveyor to submit the Record Copy to obtain this required document."
      const footerLines = pdf.splitTextToSize(footerText, pageWidth - 30)
      pdf.text(footerLines, 15, yPosition)
      yPosition += footerLines.length * 3 + 4

      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(8)
      pdf.text("Note:", 15, yPosition)
      yPosition += 3

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

      // Contact information
      // pdf.setFont("helvetica", "bold")
      // pdf.setFontSize(8)
      // pdf.text("Commissioner's Lodge Way, GRA", 15, yPosition)
      // yPosition += 3
      // pdf.setFont("helvetica", "normal")
      // pdf.text("PMB 1425, Ilorin, Kwara State.", 15, yPosition)
      // yPosition += 3
      // pdf.text("KWGIS@Kwarastate.gov.ng", 15, yPosition)
      // yPosition += 3
      // pdf.text("09035551892", 15, yPosition)

      // Generate filename
      const sanitizedName = formData.recipientName.replace(/\s+/g, "-").toUpperCase()
      const filename = `${sanitizedName}-Charting-Report.pdf`

      pdf.save(filename)
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
