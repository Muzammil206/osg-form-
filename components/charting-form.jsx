"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ChartingForm({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Header Information</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="referenceNumber">Reference Number</Label>
            <Input
              id="referenceNumber"
              value={data.referenceNumber}
              onChange={(e) => handleChange("referenceNumber", e.target.value)}
              placeholder="e.g., KWGIS/OSG/539/R2293"
            />
          </div>
          <div>
            <Label htmlFor="recipientName">Recipient Name</Label>
            <Input
              id="recipientName"
              value={data.recipientName}
              onChange={(e) => handleChange("recipientName", e.target.value)}
              placeholder="e.g., ODEJOBI FAMILY"
            />
          </div>
          <div>
            <Label htmlFor="date">Report Date</Label>
            <Input
              id="date"
              value={data.date}
              onChange={(e) => handleChange("date", e.target.value)}
              placeholder="e.g., 24TH NOVEMBER, 2025"
            />
          </div>
        </div>
      </div>

      {/* Survey Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Survey Details</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="surveyPlanNumber">Survey Plan Number</Label>
            <Input
              id="surveyPlanNumber"
              value={data.surveyPlanNumber}
              onChange={(e) => handleChange("surveyPlanNumber", e.target.value)}
              placeholder="e.g., KW/1289/030/2021"
            />
          </div>
          <div>
            <Label htmlFor="applicationDate">Application Date</Label>
            <Input
              id="applicationDate"
              value={data.applicationDate}
              onChange={(e) => handleChange("applicationDate", e.target.value)}
              placeholder="e.g., 24TH September, 2025"
            />
          </div>
          <div>
            <Label htmlFor="beacon">Beacon</Label>
            <Input
              id="beacon"
              value={data.beacon}
              onChange={(e) => handleChange("beacon", e.target.value)}
              placeholder="e.g., SC/KW.G96141"
            />
          </div>

          {/* UTM Coordinates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="beaconE">Beacon E (mE)</Label>
              <Input
                id="beaconE"
                value={data.beaconE}
                onChange={(e) => handleChange("beaconE", e.target.value)}
                placeholder="695060.168"
              />
            </div>
            <div>
              <Label htmlFor="beaconN">Beacon N (mN)</Label>
              <Input
                id="beaconN"
                value={data.beaconN}
                onChange={(e) => handleChange("beaconN", e.target.value)}
                placeholder="912149.252"
              />
            </div>
          </div>

          {/* Township Coordinates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="townshipE">Township E (mE)</Label>
              <Input
                id="townshipE"
                value={data.townshipE}
                onChange={(e) => handleChange("townshipE", e.target.value)}
                placeholder="10968.269"
              />
            </div>
            <div>
              <Label htmlFor="townshipN">Township N (mN)</Label>
              <Input
                id="townshipN"
                value={data.townshipN}
                onChange={(e) => handleChange("townshipN", e.target.value)}
                placeholder="15486.737"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Location Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="area">Area</Label>
            <Input
              id="area"
              value={data.area}
              onChange={(e) => handleChange("area", e.target.value)}
              placeholder="e.g., Kango Area"
            />
          </div>
          <div>
            <Label htmlFor="irepodun">Town/Region</Label>
            <Input
              id="irepodun"
              value={data.irepodun}
              onChange={(e) => handleChange("irepodun", e.target.value)}
              placeholder="e.g., Ajase-Ipo"
            />
          </div>
          <div>
            <Label htmlFor="lga">LGA</Label>
            <Input
              id="lga"
              value={data.lga}
              onChange={(e) => handleChange("lga", e.target.value)}
              placeholder="e.g., Irepodun LGA"
            />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              value={data.state}
              onChange={(e) => handleChange("state", e.target.value)}
              placeholder="e.g., Kwara State"
            />
          </div>
          <div>
            <Label htmlFor="size">Size (Hectares)</Label>
            <Input
              id="size"
              value={data.size}
              onChange={(e) => handleChange("size", e.target.value)}
              placeholder="e.g., 81.118"
            />
          </div>
        </div>
      </div>

      {/* Surveyor Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Surveyor Information</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="surveyor">Surveyor Name</Label>
            <Input
              id="surveyor"
              value={data.surveyor}
              onChange={(e) => handleChange("surveyor", e.target.value)}
              placeholder="e.g., Surv. A. O. Oyetoke"
            />
          </div>
          <div>
            <Label htmlFor="dateSigned">Date Signed</Label>
            <Input
              id="dateSigned"
              value={data.dateSigned}
              onChange={(e) => handleChange("dateSigned", e.target.value)}
              placeholder="e.g., 22/09/2025"
            />
          </div>
        </div>
      </div>

      {/* Land Status */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Land Status</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="landAcquisition">Land Falls Within Government Acquisition</Label>
            <Select value={data.landAcquisition} onValueChange={(value) => handleChange("landAcquisition", value)}>
              <SelectTrigger id="landAcquisition">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="YES">YES</SelectItem>
                <SelectItem value="NO">NO</SelectItem>
              </SelectContent>
            </Select>
            {data.landAcquisition === "YES" && (
              <Input
                className="mt-2"
                placeholder="Remarks"
                value={data.landAcquisitionRemarks}
                onChange={(e) => handleChange("landAcquisitionRemarks", e.target.value)}
              />
            )}
          </div>

          <div>
            <Label htmlFor="existingTitle">Land Falls Within Existing Title</Label>
            <Select value={data.existingTitle} onValueChange={(value) => handleChange("existingTitle", value)}>
              <SelectTrigger id="existingTitle">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="YES">YES</SelectItem>
                <SelectItem value="NO">NO</SelectItem>
              </SelectContent>
            </Select>
            {data.existingTitle === "YES" && (
              <Input
                className="mt-2"
                placeholder="Remarks"
                value={data.existingTitleRemarks}
                onChange={(e) => handleChange("existingTitleRemarks", e.target.value)}
              />
            )}
          </div>

          <div>
            <Label htmlFor="freeFromAcquisition">Land is Free From Any Acquisition</Label>
            <Select
              value={data.freeFromAcquisition}
              onValueChange={(value) => handleChange("freeFromAcquisition", value)}
            >
              <SelectTrigger id="freeFromAcquisition">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="YES">YES</SelectItem>
                <SelectItem value="NO">NO</SelectItem>
              </SelectContent>
            </Select>
            {data.freeFromAcquisition === "YES" && (
              <Input
                className="mt-2"
                placeholder="Remarks"
                value={data.freeAcquisitionRemarks}
                onChange={(e) => handleChange("freeAcquisitionRemarks", e.target.value)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
