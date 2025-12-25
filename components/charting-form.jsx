"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ChartingForm({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value })
  }

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    const options = { year: "numeric", month: "long", day: "numeric" }
    return date.toLocaleDateString("en-US", options).toUpperCase()
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section>
        <h3 className="text-xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">Header Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="referenceNumber" className="text-gray-700 font-semibold">
              Reference Number
            </Label>
            <Input
              id="referenceNumber"
              value={data.referenceNumber}
              onChange={(e) => handleChange("referenceNumber", e.target.value)}
              placeholder="e.g., KWGIS/OSG/539/R2293"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="recipientName" className="text-gray-700 font-semibold">
              Recipient Name
            </Label>
            <Input
              id="recipientName"
              value={data.recipientName}
              onChange={(e) => handleChange("recipientName", e.target.value)}
              placeholder="e.g., ODEJOBI FAMILY"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="date" className="text-gray-700 font-semibold">
              Report Date
            </Label>
            <Input
              id="date"
              type="date"
              value={data.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="mt-2"
            />
            {data.date && <p className="text-sm text-gray-600 mt-2">{formatDateForDisplay(data.date)}</p>}
          </div>
        </div>
      </section>

      {/* Survey Details */}
      <section>
        <h3 className="text-xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">Survey Details</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="surveyPlanNumber" className="text-gray-700 font-semibold">
                Survey Plan Number
              </Label>
              <Input
                id="surveyPlanNumber"
                value={data.surveyPlanNumber}
                onChange={(e) => handleChange("surveyPlanNumber", e.target.value)}
                placeholder="e.g., KW/1289/030/2021"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="applicationDate" className="text-gray-700 font-semibold">
                Application Date
              </Label>
              <Input
                id="applicationDate"
                type="date"
                value={data.applicationDate}
                onChange={(e) => handleChange("applicationDate", e.target.value)}
                className="mt-2"
              />
              {data.applicationDate && (
                <p className="text-sm text-gray-600 mt-2">{formatDateForDisplay(data.applicationDate)}</p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="beacon" className="text-gray-700 font-semibold">
              Beacon
            </Label>
            <Input
              id="beacon"
              value={data.beacon}
              onChange={(e) => handleChange("beacon", e.target.value)}
              placeholder="e.g., SC/KW.G96141"
              className="mt-2"
            />
          </div>

          {/* UTM Coordinates */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">UTM Coordinates (Beacon)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="beaconE" className="text-gray-700">
                  E (mE)
                </Label>
                <Input
                  id="beaconE"
                  type="number"
                  step="0.001"
                  value={data.beaconE}
                  onChange={(e) => handleChange("beaconE", e.target.value)}
                  placeholder="695060.168"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="beaconN" className="text-gray-700">
                  N (mN)
                </Label>
                <Input
                  id="beaconN"
                  type="number"
                  step="0.001"
                  value={data.beaconN}
                  onChange={(e) => handleChange("beaconN", e.target.value)}
                  placeholder="912149.252"
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Township Coordinates */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Township Coordinates</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="townshipE" className="text-gray-700">
                  E (mE)
                </Label>
                <Input
                  id="townshipE"
                  type="number"
                  step="0.001"
                  value={data.townshipE}
                  onChange={(e) => handleChange("townshipE", e.target.value)}
                  placeholder="10968.269"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="townshipN" className="text-gray-700">
                  N (mN)
                </Label>
                <Input
                  id="townshipN"
                  type="number"
                  step="0.001"
                  value={data.townshipN}
                  onChange={(e) => handleChange("townshipN", e.target.value)}
                  placeholder="15486.737"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section>
        <h3 className="text-xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">Location Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="area" className="text-gray-700 font-semibold">
              Area
            </Label>
            <Input
              id="area"
              value={data.area}
              onChange={(e) => handleChange("area", e.target.value)}
              placeholder="e.g., Kango Area"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="irepodun" className="text-gray-700 font-semibold">
              Town/Region
            </Label>
            <Input
              id="irepodun"
              value={data.irepodun}
              onChange={(e) => handleChange("irepodun", e.target.value)}
              placeholder="e.g., Ajase-Ipo"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="lga" className="text-gray-700 font-semibold">
              LGA
            </Label>
            <Input
              id="lga"
              value={data.lga}
              onChange={(e) => handleChange("lga", e.target.value)}
              placeholder="e.g., Irepodun LGA"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="state" className="text-gray-700 font-semibold">
              State
            </Label>
            <Input
              id="state"
              value={data.state}
              onChange={(e) => handleChange("state", e.target.value)}
              placeholder="e.g., Kwara State"
              className="mt-2"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="size" className="text-gray-700 font-semibold">
              Size (Hectares)
            </Label>
            <Input
              id="size"
              type="number"
              step="0.001"
              value={data.size}
              onChange={(e) => handleChange("size", e.target.value)}
              placeholder="e.g., 81.118"
              className="mt-2"
            />
          </div>
        </div>
      </section>

      {/* Surveyor Information */}
      <section>
        <h3 className="text-xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">Surveyor Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="surveyor" className="text-gray-700 font-semibold">
              Surveyor Name
            </Label>
            <Input
              id="surveyor"
              value={data.surveyor}
              onChange={(e) => handleChange("surveyor", e.target.value)}
              placeholder="e.g., Surv. A. O. Oyetoke"
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="dateSigned" className="text-gray-700 font-semibold">
              Date Signed
            </Label>
            <Input
              id="dateSigned"
              type="date"
              value={data.dateSigned}
              onChange={(e) => handleChange("dateSigned", e.target.value)}
              className="mt-2"
            />
            {data.dateSigned && <p className="text-sm text-gray-600 mt-2">{formatDateForDisplay(data.dateSigned)}</p>}
          </div>
        </div>
      </section>

      {/* Land Status */}
      <section>
        <h3 className="text-xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-blue-200">Land Status</h3>
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <Label htmlFor="landAcquisition" className="text-gray-700 font-semibold block mb-3">
              Land Falls Within Government Acquisition
            </Label>
            <Select value={data.landAcquisition} onValueChange={(value) => handleChange("landAcquisition", value)}>
              <SelectTrigger id="landAcquisition" className="bg-white">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="YES">YES</SelectItem>
                <SelectItem value="NO">NO</SelectItem>
              </SelectContent>
            </Select>
            {data.landAcquisition === "YES" && (
              <Input
                className="mt-3"
                placeholder="Add remarks..."
                value={data.landAcquisitionRemarks}
                onChange={(e) => handleChange("landAcquisitionRemarks", e.target.value)}
              />
            )}
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <Label htmlFor="existingTitle" className="text-gray-700 font-semibold block mb-3">
              Land Falls Within Existing Title
            </Label>
            <Select value={data.existingTitle} onValueChange={(value) => handleChange("existingTitle", value)}>
              <SelectTrigger id="existingTitle" className="bg-white">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="YES">YES</SelectItem>
                <SelectItem value="NO">NO</SelectItem>
              </SelectContent>
            </Select>
            {data.existingTitle === "YES" && (
              <Input
                className="mt-3"
                placeholder="Add remarks..."
                value={data.existingTitleRemarks}
                onChange={(e) => handleChange("existingTitleRemarks", e.target.value)}
              />
            )}
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <Label htmlFor="freeFromAcquisition" className="text-gray-700 font-semibold block mb-3">
              Land is Free From Any Acquisition
            </Label>
            <Select
              value={data.freeFromAcquisition}
              onValueChange={(value) => handleChange("freeFromAcquisition", value)}
            >
              <SelectTrigger id="freeFromAcquisition" className="bg-white">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="YES">YES</SelectItem>
                <SelectItem value="NO">NO</SelectItem>
              </SelectContent>
            </Select>
            {data.freeFromAcquisition === "YES" && (
              <Input
                className="mt-3"
                placeholder="Add remarks..."
                value={data.freeAcquisitionRemarks}
                onChange={(e) => handleChange("freeAcquisitionRemarks", e.target.value)}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
